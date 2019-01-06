import { List } from '../entities/List';

export interface ListDataAccessInterface {
  fetch(): Promise<List>;
}
