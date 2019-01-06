import { createListItem } from '../entities/ListItem';
import { FetchListUseCase, FetchListUseCaseFactory } from './FetchListUseCase';

export const createFetchList: FetchListUseCaseFactory = _context => {
  const fetchList: FetchListUseCase = async _input => {
    return [createListItem('a'), createListItem('b'), createListItem('c')];
  };
  return fetchList;
};
