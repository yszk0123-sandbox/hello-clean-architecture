import { flow, types } from 'mobx-state-tree';
import { getAppContext } from './context';
import { AppContext } from './context-type';
import { createListItemEntity } from './entities';
import {
  AppViewModel,
  ListItemViewModel,
  ListViewModel,
} from './viewModels-type';
import { ViewModel } from './ViewModelType';

const ListItem: ViewModel<ListItemViewModel> = types.model({
  done: types.boolean,
  id: types.string,
  title: types.string,
});

export function createListItem(title: string): ListItemViewModel {
  return ListItem.create(createListItemEntity(title));
}

const ListViewModel: ViewModel<ListViewModel> = types
  .model({
    items: types.array(ListItem),
  })
  .views(self => ({
    get count() {
      return self.items.length;
    },
  }))
  .actions(self => ({
    addItem: flow(function*(title: string) {
      const { useCases } = getAppContext(self);

      const newItem = yield useCases.addListItem({ title });
      self.items.push(newItem);
    }),
    fetch: flow(function*() {
      const { useCases } = getAppContext(self);

      self.items.clear();
      try {
        self.items = yield useCases.fetchListItems({});
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.error('Error', error);
      }
    }),
  }));

const AppViewModel: ViewModel<AppViewModel> = types.model('Store', {
  list: ListViewModel,
});

export function createApp(context: AppContext): AppViewModel {
  const app = AppViewModel.create({ list: ListViewModel.create() }, context);
  return app;
}
