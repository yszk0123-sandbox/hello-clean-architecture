import { AddListItemUseCase } from './AddListItemUseCase';
import { FetchListUseCase } from './FetchListUseCase';

export interface AppUseCases {
  addListItem: AddListItemUseCase;
  fetchList: FetchListUseCase;
}
