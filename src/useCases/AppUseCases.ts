import { AddListItemUseCase } from './AddListItemUseCase';
import { FetchListItemsUseCase } from './FetchListItemsUseCase';

export interface AppUseCases {
  addListItem: AddListItemUseCase;
  fetchListItems: FetchListItemsUseCase;
}
