import { ListDataAccessInterface } from '../dataAccesses/ListDataAccessInterface';
import { UseCase, UseCaseFactory } from '../type';
import { FetchListUseCase, FetchListUseCaseFactory } from './FetchListUseCase';

export interface FetchListInput {}

export interface FetchListOutput {}

export interface FetchListUseCase
  extends UseCase<FetchListInput, FetchListOutput> {}

export interface FetchListContext {
  listDataAccess: ListDataAccessInterface;
}

export interface FetchListUseCaseFactory
  extends UseCaseFactory<FetchListUseCase, FetchListContext> {}

export const createFetchList: FetchListUseCaseFactory = ({
  listDataAccess,
}) => {
  const fetchList: FetchListUseCase = async _input => {
    return listDataAccess.fetch();
  };
  return fetchList;
};
