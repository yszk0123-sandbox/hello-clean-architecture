import { ListDataAccess } from '../dataAccesses/ListDataAccess';
import { UseCase, UseCaseFactory } from '../type';

export interface FetchListInput {}

export interface FetchListOutput {}

export interface FetchListUseCase
  extends UseCase<FetchListInput, FetchListOutput> {}

export interface FetchListContext {
  listDataAccess: ListDataAccess;
}

export interface FetchListUseCaseFactory
  extends UseCaseFactory<FetchListUseCase, FetchListContext> {}
