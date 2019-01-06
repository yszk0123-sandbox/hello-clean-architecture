import { createList } from '../entities/List';
import { createListItem } from '../entities/ListItem';
import { ListDataAccess } from './ListDataAccess';

export class ListFireStoreDataAccess implements ListDataAccess {
  public async fetch() {
    // FIXME: Use real data
    return createList([
      createListItem('a'),
      createListItem('b'),
      createListItem('c'),
    ]);
  }
}
