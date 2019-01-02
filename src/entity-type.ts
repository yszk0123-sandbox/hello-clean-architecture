export interface IListItemEntity {
  id: string;
  title: string;
  done: boolean;
}

export interface IListEntity {
  items: Array<IListItemEntity>;
  count: number;
}
