import { observer } from 'mobx-react';
import React from 'react';
import { render } from 'react-dom';
// FIXME: Remove this polyfill
// mobx-state-tree depends on setImmediate which is not implemented in browsers...
import 'setimmediate';
import { AppContext } from './context';
import { createAddListItem } from './useCases/AddListItemUseCaseFactory';
import { AppUseCases } from './useCases/AppUseCases';
import { createFetchList } from './useCases/FetchListUseCaseFactory';
import { createAppViewModel } from './viewModels/AppViewModelFactory';
import { ListViewModel } from './viewModels/ListViewModel';

interface Props {
  list: ListViewModel;
}

const App = observer<React.FunctionComponent<Props>>(({ list }) => {
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
    addListItem: createAddListItem({}),
    fetchList: createFetchList({}),
  };
  const context: AppContext = {
    useCases,
  };
  const app = createAppViewModel(context);

  render(<App list={app.list} />, document.getElementById('app'));

  await app.list.fetch();
}

// tslint:disable-next-line:no-console
main().catch(console.error);
