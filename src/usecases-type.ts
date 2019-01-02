type Usecase<Input, Output> = (input: Input) => Output;

interface FetchListItemsUsecase extends Usecase<{}, {}> {}

export interface Usecases {
  fetchListItems: FetchListItemsUsecase;
}
