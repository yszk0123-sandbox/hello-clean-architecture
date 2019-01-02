import { createListItemEntity } from './entities';

export async function fetchListItems() {
  return [
    createListItemEntity('a'),
    createListItemEntity('b'),
    createListItemEntity('c'),
  ];
}
