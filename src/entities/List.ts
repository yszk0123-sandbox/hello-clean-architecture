import { ListItem } from './ListItem';

export interface List {
  items: Array<ListItem>;
}

export function createList(items: Array<ListItem>): List {
  return {
    items,
  };
}
