import { getEnv, IAnyStateTreeNode } from 'mobx-state-tree';

type Usecase<Input, Output> = (input: Input) => Output;

interface FetchListItemsUsecase extends Usecase<{}, {}> {}

interface Usecases {
  fetchListItems: FetchListItemsUsecase;
}

export interface AppDependencies {
  usecases: Usecases;
}

export function getDependencies(node: IAnyStateTreeNode): AppDependencies {
  return getEnv(node);
}
