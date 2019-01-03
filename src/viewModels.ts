import { flow, types } from 'mobx-state-tree';
import { getAppContext } from './context';
import { AppContext } from './context-type';
import { createListItemEntity } from './entities';
import {
  IAppViewModel,
  IListItemViewModel,
  IListViewModel,
  IViewModel,
} from './viewModels-type';

const ListItem: IViewModel<IListItemViewModel> = types.model({
  id: types.string,
  title: types.string,
  done: types.boolean,
});

export function createListItem(title: string): IListItemViewModel {
  return ListItem.create(createListItemEntity(title));
}

const ListViewModel: IViewModel<IListViewModel> = types
  .model({
    items: types.array(ListItem),
  })
  .views(self => ({
    get count() {
      return self.items.length;
    },
  }))
  .actions(self => ({
    fetch: flow(function*() {
      const { usecases } = getAppContext(self);

      self.items.clear();
      try {
        self.items = yield usecases.fetchListItems({});
      } catch (error) {
        console.error('Error', error);
      }
    }),
    addItem: flow(function*(title: string) {
      const { usecases } = getAppContext(self);

      const newItem = yield usecases.addListItem({ title });
      self.items.push(newItem);
    }),
  }));

const AppViewModel: IViewModel<IAppViewModel> = types.model('Store', {
  list: ListViewModel,
});

export function createApp(context: AppContext): IAppViewModel {
  const app = AppViewModel.create({ list: ListViewModel.create() }, context);
  return app;
}
