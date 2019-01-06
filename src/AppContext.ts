import { getEnv, IAnyStateTreeNode } from 'mobx-state-tree';
import { AppUseCases } from './AppUseCases';

export interface AppContext {
  useCases: AppUseCases;
}

export function getAppContext(node: IAnyStateTreeNode): AppContext {
  return getEnv(node);
}
