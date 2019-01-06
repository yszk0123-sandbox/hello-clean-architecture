import { ListEntity } from '../entities/ListEntity';

export interface ListViewModel extends ListEntity {
  count: number;
  addItem(title: string): void;
  fetch(): Promise<unknown>;
}
