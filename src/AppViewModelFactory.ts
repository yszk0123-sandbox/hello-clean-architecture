import { types } from 'mobx-state-tree';
import { AppContext } from './AppContext';
import { AppViewModel } from './AppViewModel';
import {
  createListViewModel,
  ListViewModelImpl,
} from './viewModels/ListViewModelFactory';

const AppViewModelImpl = types.model('Store', {
  list: ListViewModelImpl,
});

export function createAppViewModel(context: AppContext): AppViewModel {
  const app = AppViewModelImpl.create({ list: createListViewModel() }, context);
  return app;
}
