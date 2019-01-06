import { createListItem, ListItem } from '../entities/ListItem';
import { UseCase, UseCaseFactory } from '../type';
import {
  AddListItemUseCase,
  AddListItemUseCaseFactory,
} from './AddListItemUseCase';

export interface AddListItemInput {
  title: string;
}

export interface AddListItemOutput extends ListItem {}

export interface AddListItemUseCase
  extends UseCase<AddListItemInput, AddListItemOutput> {}

export interface AddListItemContext {}

export interface AddListItemUseCaseFactory
  extends UseCaseFactory<AddListItemUseCase, AddListItemContext> {}

export const createAddListItem: AddListItemUseCaseFactory = _context => {
  const addListItem: AddListItemUseCase = async input => {
    // TODO: Persist data
    return createListItem(input.title);
  };
  return addListItem;
};
