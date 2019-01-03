import { ListItemEntity } from './entities-type';
import { UseCase } from './type';

export interface FetchListItemsUseCase extends UseCase<{}, {}> {}

export interface AddListItemUseCase
  extends UseCase<{ title: string }, ListItemEntity> {}

interface ListItemUseCases {
  addListItem: AddListItemUseCase;
  fetchListItems: FetchListItemsUseCase;
}

export interface AppUseCases extends ListItemUseCases {}
