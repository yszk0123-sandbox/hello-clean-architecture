import { getEnv, IAnyStateTreeNode } from 'mobx-state-tree';
import { Usecases } from './usecases-type';

export interface AppContext {
  usecases: Usecases;
}

export function getAppContext(node: IAnyStateTreeNode): AppContext {
  return getEnv(node);
}
