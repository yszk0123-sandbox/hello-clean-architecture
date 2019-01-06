import { observer } from 'mobx-react';
import React from 'react';
import { render } from 'react-dom';
// FIXME: Remove this polyfill
// mobx-state-tree depends on setImmediate which is not implemented in browsers...
import 'setimmediate';
import { AppContext } from './AppContext';
import { AppUseCases } from './AppUseCases';
import { createAppViewModel } from './AppViewModelFactory';
import { ListFireStoreDataAccess } from './dataAccesses/firestore/ListFirestoreDataAccess';
import { ListDataAccessInterface } from './dataAccesses/ListDataAccessInterface';
import { createAddListItem } from './useCases/AddListItemUseCaseFactory';
import { createFetchList } from './useCases/FetchListUseCaseFactory';
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
  const listDataAccess: ListDataAccessInterface = new ListFireStoreDataAccess();
  const useCases: AppUseCases = {
    addListItem: createAddListItem({}),
    fetchList: createFetchList({ listDataAccess }),
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
