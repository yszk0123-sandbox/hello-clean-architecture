import { IListItemEntity } from './entities-type';

type Usecase<Input, Output> = (input: Input) => Promise<Output>;

interface FetchListItemsUsecase extends Usecase<{}, {}> {}

interface AddListItemUsecase
  extends Usecase<{ title: string }, IListItemEntity> {}

interface ListItemUsecases {
  addListItem: AddListItemUsecase;
  fetchListItems: FetchListItemsUsecase;
}

export interface Usecases extends ListItemUsecases {}
