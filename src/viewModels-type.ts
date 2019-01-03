import { IType } from 'mobx-state-tree';
import { IListEntity, IListItemEntity } from './entities-type';

export interface IViewModel<M> extends IType<any, any, M> {}

export interface IListItemViewModel extends IListItemEntity {}

export interface IListViewModel extends IListEntity {
  addItem(title: string): void;
  fetch(): Promise<unknown>;
}

export interface IAppViewModel {
  list: IListViewModel;
}
