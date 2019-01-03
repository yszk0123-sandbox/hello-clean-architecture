import { getEnv, IAnyStateTreeNode } from 'mobx-state-tree';
import { AppContext } from './context-type';

export function getAppContext(node: IAnyStateTreeNode): AppContext {
  return getEnv(node);
}
