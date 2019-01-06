import { types } from 'mobx-state-tree';
import { AppContext } from '../context-type';
import { AppViewModel } from './AppViewModel-type';
import { createList, ListViewModelImpl } from './ListViewModel';
import { ViewModel } from './ViewModelType';

const AppViewModelImpl: ViewModel<AppViewModel> = types.model('Store', {
  list: ListViewModelImpl,
});

export function createApp(context: AppContext): AppViewModel {
  const app = AppViewModelImpl.create({ list: createList() }, context);
  return app;
}
