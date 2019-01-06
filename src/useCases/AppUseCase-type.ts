import { AddListItemUseCase } from './AddListItemUseCase-type';
import { FetchListItemsUseCase } from './FetchListItemsUseCase-type';

export interface AppUseCases {
  addListItem: AddListItemUseCase;
  fetchListItems: FetchListItemsUseCase;
}
