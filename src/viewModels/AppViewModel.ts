import { types } from 'mobx-state-tree';
import { AppContext } from '../context';
import { AppViewModel } from './AppViewModel-type';
import { createList, ListViewModelImpl } from './ListViewModel';

const AppViewModelImpl = types.model('Store', {
  list: ListViewModelImpl,
});

export function createApp(context: AppContext): AppViewModel {
  const app = AppViewModelImpl.create({ list: createList() }, context);
  return app;
}
