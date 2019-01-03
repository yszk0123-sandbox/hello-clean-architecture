import { IListItemEntity } from './entities-type';

type UseCase<Input, Output> = (input: Input) => Promise<Output>;

interface FetchListItemsUseCase extends UseCase<{}, {}> {}

interface AddListItemUseCase
  extends UseCase<{ title: string }, IListItemEntity> {}

interface ListItemUseCases {
  addListItem: AddListItemUseCase;
  fetchListItems: FetchListItemsUseCase;
}

export interface UseCases extends ListItemUseCases {}
