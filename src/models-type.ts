import { IType } from 'mobx-state-tree';
import { IListEntity, IListItemEntity } from './entity-type';

export interface IModel<M> extends IType<any, any, M> {}

export interface IListItemModel extends IListItemEntity {}

export interface IListModel extends IListEntity {
  addItem(title: string): void;
  fetch(): Promise<unknown>;
}

export interface IAppModel {
  list: IListModel;
}
