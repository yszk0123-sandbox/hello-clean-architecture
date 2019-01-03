import { createListItemEntity } from './entities';
import { ListItemEntity } from './entities-type';
import { AddListItemUseCase, FetchListItemsUseCase } from './useCases-type';

export function createFetchListItems(): FetchListItemsUseCase {
  return async function fetchListItems() {
    return [
      createListItemEntity('a'),
      createListItemEntity('b'),
      createListItemEntity('c'),
    ];
  };
}

export function createAddListItem(): AddListItemUseCase {
  return async function addListItem(input: {
    title: string;
  }): Promise<ListItemEntity> {
    // TODO: Persist data
    return createListItemEntity(input.title);
  };
}
