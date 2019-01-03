import { createListItemEntity } from './entities';
import { ListItemEntity } from './entities-type';

export async function fetchListItems() {
  return [
    createListItemEntity('a'),
    createListItemEntity('b'),
    createListItemEntity('c'),
  ];
}

export async function addListItem(input: {
  title: string;
}): Promise<ListItemEntity> {
  // TODO: Persist data
  return createListItemEntity(input.title);
}
