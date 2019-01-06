import { types } from 'mobx-state-tree';
import { createListItem } from '../entities/ListItem';
import { ListItemViewModel } from './ListItemViewModel';

export const ListItemViewModelImpl = types.model({
  done: types.boolean,
  id: types.string,
  title: types.string,
});

export function createListItemViewModel(title: string): ListItemViewModel {
  return ListItemViewModelImpl.create(createListItem(title));
}
