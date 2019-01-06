import { List } from '../entities/List';

export interface ListViewModel extends List {
  count: number;
  addItem(title: string): void;
  fetch(): Promise<unknown>;
}
