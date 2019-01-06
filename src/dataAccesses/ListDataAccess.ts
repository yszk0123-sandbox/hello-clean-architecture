import { List } from '../entities/List';

export interface ListDataAccess {
  fetch(): Promise<List>;
}
