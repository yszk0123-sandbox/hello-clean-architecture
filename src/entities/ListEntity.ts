import { ListItemEntity } from './ListItemEntity-type';

export interface ListEntity {
  items: Array<ListItemEntity>;
  count: number;
}
