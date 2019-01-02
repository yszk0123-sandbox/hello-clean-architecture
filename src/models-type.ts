import { IType } from 'mobx-state-tree';

export interface IModel<M> extends IType<any, any, M> {}

export interface IItemModel {
  id: string;
  title: string;
  done: boolean;
}

export interface IListModel {
  items: Array<IItemModel>;
  addItem(title: string): void;
  fetch(): Promise<void>;
  count: number;
}

export interface IAppModel {
  list: IListModel;
}
