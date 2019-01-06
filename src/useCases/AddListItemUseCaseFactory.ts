import { createListItemEntity } from '../entities/ListItemEntity';
import {
  AddListItemUseCase,
  AddListItemUseCaseFactory,
} from './AddListItemUseCase';

export const createAddListItem: AddListItemUseCaseFactory = _context => {
  const addListItem: AddListItemUseCase = async input => {
    // TODO: Persist data
    return createListItemEntity(input.title);
  };
  return addListItem;
};
