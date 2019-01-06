import { createListItem } from '../entities/ListItem';
import {
  FetchListItemsUseCase,
  FetchListItemsUseCaseFactory,
} from './FetchListItemsUseCase';

export const createFetchListItems: FetchListItemsUseCaseFactory = _context => {
  const fetchListItems: FetchListItemsUseCase = async _input => {
    return [createListItem('a'), createListItem('b'), createListItem('c')];
  };
  return fetchListItems;
};
