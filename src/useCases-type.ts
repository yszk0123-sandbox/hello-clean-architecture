import { ListItemEntity } from './entities-type';
import { UseCase } from './type';

export interface AddListItemInput {
  title: string;
}
export interface AddListItemOutput extends ListItemEntity {}
export interface AddListItemUseCase
  extends UseCase<AddListItemInput, AddListItemOutput> {}

export interface FetchListItemsInput {}
export interface FetchListItemsOutput {}
export interface FetchListItemsUseCase
  extends UseCase<FetchListItemsInput, FetchListItemsOutput> {}

interface ListItemUseCases {
  addListItem: AddListItemUseCase;
  fetchListItems: FetchListItemsUseCase;
}

export interface AppUseCases extends ListItemUseCases {}
