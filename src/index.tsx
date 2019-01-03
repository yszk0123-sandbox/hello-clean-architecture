import { observer } from 'mobx-react';
import React from 'react';
import { render } from 'react-dom';
// FIXME: Remove this polyfill
// mobx-state-tree depends on setImmediate which is not implemented in browsers...
import 'setimmediate';
import { AppContext } from './context-type';
import { createAddListItem, createFetchListItems } from './useCases';
import { AppUseCases } from './useCases-type';
import { createApp } from './viewModels';
import { AppViewModel } from './viewModels-type';

const App = observer(({ list }: AppViewModel) => {
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
  const useCases: AppUseCases = {
    addListItem: createAddListItem(),
    fetchListItems: createFetchListItems(),
  };
  const context: AppContext = {
    useCases,
  };
  const app = createApp(context);
  await app.list.fetch();
  render(<App list={app.list} />, document.getElementById('app'));
}

main().catch(console.error);
