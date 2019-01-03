import { ListItemEntity } from './entities-type';
import { UseCase } from './type';

interface FetchListItemsUseCase extends UseCase<{}, {}> {}

interface AddListItemUseCase
  extends UseCase<{ title: string }, ListItemEntity> {}

interface ListItemUseCases {
  addListItem: AddListItemUseCase;
  fetchListItems: FetchListItemsUseCase;
}

export interface UseCases extends ListItemUseCases {}
