import { createList } from '../../entities/List';
import { createListItem } from '../../entities/ListItem';
import { ListDataAccessInterface } from '../ListDataAccessInterface';

export class ListFireStoreDataAccess implements ListDataAccessInterface {
  public async fetch() {
    // FIXME: Use real data
    return createList([
      createListItem('a'),
      createListItem('b'),
      createListItem('c'),
    ]);
  }
}
