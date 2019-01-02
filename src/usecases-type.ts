import { IListItemEntity } from './entity-type';

type Usecase<Input, Output> = (input: Input) => Promise<Output>;

interface FetchListItemsUsecase extends Usecase<{}, {}> {}

interface AddListItemUsecase
  extends Usecase<{ title: string }, IListItemEntity> {}

export interface Usecases {
  addListItem: AddListItemUsecase;
  fetchListItems: FetchListItemsUsecase;
}
