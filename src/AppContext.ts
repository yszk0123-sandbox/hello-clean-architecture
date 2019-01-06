import { getEnv, IAnyStateTreeNode } from 'mobx-state-tree';
import { AddListItemUseCase } from './useCases/AddListItemUseCase';
import { FetchListUseCase } from './useCases/FetchListUseCase';

export interface AppUseCases {
  addListItem: AddListItemUseCase;
  fetchList: FetchListUseCase;
}

export interface AppContext {
  useCases: AppUseCases;
}

export function getAppContext(node: IAnyStateTreeNode): AppContext {
  return getEnv(node);
}
