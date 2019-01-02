import { flow, Instance, types } from 'mobx-state-tree';

const Item = types.model({
  id: types.string,
  title: types.string,
  done: types.boolean,
});

export interface IItem extends Instance<typeof Item> {}

function generateId(): string {
  return String(Math.floor(Math.random() * 1000000));
}

function createItem(title: string): IItem {
  return Item.create({ id: generateId(), title, done: false });
}

async function fetch() {
  return [createItem('a')];
}

const ListModel = types
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

export interface IListModel extends Instance<typeof ListModel> {}

const AppModel = types.model('Store', {
  list: ListModel,
});

export interface IAppModel extends Instance<typeof AppModel> {}

export function createApp(): IAppModel {
  const app = AppModel.create({ list: ListModel.create() });
  return app;
}
