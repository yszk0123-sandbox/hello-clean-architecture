import { flow, IType, types } from 'mobx-state-tree';

interface IModel<M> extends IType<any, any, M> {}

interface IItemModel {
  id: string;
  title: string;
  done: boolean;
}

const Item: IModel<IItemModel> = types.model({
  id: types.string,
  title: types.string,
  done: types.boolean,
});

function generateId(): string {
  return String(Math.floor(Math.random() * 1000000));
}

function createItem(title: string): IItemModel {
  return Item.create({ id: generateId(), title, done: false });
}

async function fetch() {
  return [createItem('a')];
}

export interface IListModel {
  items: Array<IItemModel>;
  addItem(title: string): void;
  fetch(): Promise<void>;
  count: number;
}

const ListModel: IModel<IListModel> = types
  .model({
    items: types.array(Item),
  })
  .views(self => ({
    get count() {
      return self.items.length;
    },
  }))
  .actions(self => ({
    fetch: flow(function*() {
      self.items.clear();
      try {
        self.items = yield fetch();
      } catch (error) {
        console.error('Error', error);
      }
    }),
    addItem(title: string) {
      const newItem = createItem(title);
      self.items.push(newItem);
    },
  }));

export interface IAppModel {
  list: IListModel;
}

const AppModel: IModel<IAppModel> = types.model('Store', {
  list: ListModel,
});

export function createApp(): IAppModel {
  const app = AppModel.create({ list: ListModel.create() });
  return app;
}
