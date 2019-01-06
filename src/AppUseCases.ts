import { AddListItemUseCase } from './useCases/AddListItemUseCase';
import { FetchListUseCase } from './useCases/FetchListUseCase';

export interface AppUseCases {
  addListItem: AddListItemUseCase;
  fetchList: FetchListUseCase;
}
