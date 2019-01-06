import { ListDataAccessInterface } from '../dataAccesses/ListDataAccessInterface';
import { UseCase, UseCaseFactory } from '../type';

export interface FetchListInput {}

export interface FetchListOutput {}

export interface FetchListUseCase
  extends UseCase<FetchListInput, FetchListOutput> {}

export interface FetchListContext {
  listDataAccess: ListDataAccessInterface;
}

export interface FetchListUseCaseFactory
  extends UseCaseFactory<FetchListUseCase, FetchListContext> {}
