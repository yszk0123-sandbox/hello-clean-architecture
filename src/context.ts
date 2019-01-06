import { getEnv, IAnyStateTreeNode } from 'mobx-state-tree';
import { AppContext } from './context';
import { AppUseCases } from './useCases/AppUseCases';

export interface AppContext {
  useCases: AppUseCases;
}

export function getAppContext(node: IAnyStateTreeNode): AppContext {
  return getEnv(node);
}
