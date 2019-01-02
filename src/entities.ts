import { IListItemEntity } from './entities-type';

function generateId(): string {
  return String(Math.floor(Math.random() * 1000000));
}

export function createListItemEntity(title: string): IListItemEntity {
  return { id: generateId(), title, done: false };
}
