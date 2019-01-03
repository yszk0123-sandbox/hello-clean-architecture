import { IType } from 'mobx-state-tree';
import { ListEntity, ListItemEntity } from './entities-type';

export interface ViewModel<M> extends IType<any, any, M> {}

export interface ListItemViewModel extends ListItemEntity {}

export interface ListViewModel extends ListEntity {
  addItem(title: string): void;
  fetch(): Promise<unknown>;
}

export interface AppViewModel {
  list: ListViewModel;
}
