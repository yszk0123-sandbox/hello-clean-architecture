import { ListItemEntity } from './entities-type';

function generateId(): string {
  return String(Math.floor(Math.random() * 1000000));
}

export function createListItemEntity(title: string): ListItemEntity {
  return { id: generateId(), title, done: false };
}
