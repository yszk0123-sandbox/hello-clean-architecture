import { types } from 'mobx-state-tree';
import { createListItemEntity } from '../entities';
import { ListItemViewModel } from './ListItemViewModel-type';
import { ViewModel } from './ViewModelType';

export const ListItemViewModelImpl: ViewModel<ListItemViewModel> = types.model({
  done: types.boolean,
  id: types.string,
  title: types.string,
});

export function createListItem(title: string): ListItemViewModel {
  return ListItemViewModelImpl.create(createListItemEntity(title));
}
