import { observer } from 'mobx-react';
import { flow, Instance, types } from 'mobx-state-tree';
import * as React from 'react';
import { render } from 'react-dom';

const Item = types.model({
  id: types.string,
  title: types.string,
  done: types.boolean,
});

interface IItem extends Instance<typeof Item> {}

function generateId(): string {
  return String(Math.floor(Math.random() * 1000000));
}

function createItem(title: string): IItem {
  return Item.create({ id: generateId(), title, done: false });
}

async function fetch() {
  return [createItem('a')];
}

const List = types
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

const Store = types.model('Store', {
  list: List,
});

interface IStore extends Instance<typeof Store> {}

const App = observer(({ list }: IStore) => {
  const onClick = () => list.addItem('new');

  return (
    <div>
      There are {list.count} items!
      <ul>
        {list.items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={onClick}>Add</button>
    </div>
  );
});

async function main() {
  const store = Store.create({ list: List.create() });
  render(<App {...store} />, document.getElementById('app'));
}

main().catch(console.error);
