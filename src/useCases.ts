import { createListItemEntity } from './entities';
import {
  AddListItemUseCase,
  AddListItemUseCaseFactory,
  FetchListItemsUseCase,
  FetchListItemsUseCaseFactory,
} from './useCases-type';

export const createFetchListItems: FetchListItemsUseCaseFactory = _context => {
  const fetchListItems: FetchListItemsUseCase = async _input => {
    return [
      createListItemEntity('a'),
      createListItemEntity('b'),
      createListItemEntity('c'),
    ];
  };
  return fetchListItems;
};

export const createAddListItem: AddListItemUseCaseFactory = _context => {
  const addListItem: AddListItemUseCase = async input => {
    // TODO: Persist data
    return createListItemEntity(input.title);
  };
  return addListItem;
};
