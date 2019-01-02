import { flow, types } from 'mobx-state-tree';
import { AppContext, getAppContext } from './context';
import { createListItemEntity } from './entities';
import { IAppModel, IListItemModel, IListModel, IModel } from './models-type';

const ListItem: IModel<IListItemModel> = types.model({
  id: types.string,
  title: types.string,
  done: types.boolean,
});

export function createListItem(title: string): IListItemModel {
  return ListItem.create(createListItemEntity(title));
}

const ListModel: IModel<IListModel> = types
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

const AppModel: IModel<IAppModel> = types.model('Store', {
  list: ListModel,
});

export function createApp(context: AppContext): IAppModel {
  const app = AppModel.create({ list: ListModel.create() }, context);
  return app;
}
