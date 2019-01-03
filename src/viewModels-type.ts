import { ListEntity, ListItemEntity } from './entities-type';

export interface ListItemViewModel extends ListItemEntity {}

export interface ListViewModel extends ListEntity {
  addItem(title: string): void;
  fetch(): Promise<unknown>;
}

export interface AppViewModel {
  list: ListViewModel;
}
