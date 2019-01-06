import { createListItem } from '../entities/ListItem';
import {
  AddListItemUseCase,
  AddListItemUseCaseFactory,
} from './AddListItemUseCase';

export const createAddListItem: AddListItemUseCaseFactory = _context => {
  const addListItem: AddListItemUseCase = async input => {
    // TODO: Persist data
    return createListItem(input.title);
  };
  return addListItem;
};
