import { ListEntity } from '../entities/ListEntity';

export interface ListViewModel extends ListEntity {
  addItem(title: string): void;
  fetch(): Promise<unknown>;
}

export interface AppViewModel {
  list: ListViewModel;
}
