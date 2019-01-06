import { types } from 'mobx-state-tree';
import { createListItemEntity } from '../entities/ListItemEntity';
import { ListItemViewModel } from './ListItemViewModel-type';

export const ListItemViewModelImpl = types.model({
  done: types.boolean,
  id: types.string,
  title: types.string,
});

export function createListItem(title: string): ListItemViewModel {
  return ListItemViewModelImpl.create(createListItemEntity(title));
}
