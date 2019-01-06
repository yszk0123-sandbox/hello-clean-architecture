import { UseCase, UseCaseFactory } from '../type';

export interface FetchListItemsInput {}
export interface FetchListItemsOutput {}
export interface FetchListItemsUseCase
  extends UseCase<FetchListItemsInput, FetchListItemsOutput> {}
export interface FetchListItemsContext {}
export interface FetchListItemsUseCaseFactory
  extends UseCaseFactory<FetchListItemsUseCase, FetchListItemsContext> {}
