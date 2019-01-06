import { createListItemEntity } from '../entities/ListItemEntity';
import {
  FetchListItemsUseCase,
  FetchListItemsUseCaseFactory,
} from './FetchListItemsUseCase';

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
