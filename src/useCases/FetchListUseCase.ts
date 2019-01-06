import { UseCase, UseCaseFactory } from '../type';

export interface FetchListInput {}
export interface FetchListOutput {}
export interface FetchListUseCase
  extends UseCase<FetchListInput, FetchListOutput> {}
export interface FetchListContext {}
export interface FetchListUseCaseFactory
  extends UseCaseFactory<FetchListUseCase, FetchListContext> {}
