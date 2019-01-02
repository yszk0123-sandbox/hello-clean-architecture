import { getEnv, IAnyStateTreeNode } from 'mobx-state-tree';
import { Usecases } from './usecases-type';

export interface AppDependencies {
  usecases: Usecases;
}

export function getDependencies(node: IAnyStateTreeNode): AppDependencies {
  return getEnv(node);
}
