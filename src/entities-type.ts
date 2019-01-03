export interface ListItemEntity {
  id: string;
  title: string;
  done: boolean;
}

export interface ListEntity {
  items: Array<ListItemEntity>;
  count: number;
}
