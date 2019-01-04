import { ListItemEntity } from './entities-type';
import { UseCase, UseCaseFactory } from './type';

export interface AddListItemInput {
  title: string;
}
export interface AddListItemOutput extends ListItemEntity {}
export interface AddListItemUseCase
  extends UseCase<AddListItemInput, AddListItemOutput> {}
export interface AddListItemContext {}
export interface AddListItemUseCaseFactory
  extends UseCaseFactory<AddListItemUseCase, AddListItemContext> {}

export interface FetchListItemsInput {}
export interface FetchListItemsOutput {}
export interface FetchListItemsUseCase
  extends UseCase<FetchListItemsInput, FetchListItemsOutput> {}
export interface FetchListItemsContext {}
export interface FetchListItemsUseCaseFactory
  extends UseCaseFactory<FetchListItemsUseCase, FetchListItemsContext> {}

interface ListItemUseCases {
  addListItem: AddListItemUseCase;
  fetchListItems: FetchListItemsUseCase;
}

export interface AppUseCases extends ListItemUseCases {}
