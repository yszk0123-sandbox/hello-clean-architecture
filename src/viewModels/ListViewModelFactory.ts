import { flow, types } from 'mobx-state-tree';
import { getAppContext } from '../context';
import { ListItemViewModelImpl } from './ListItemViewModelFactory';
import { ListViewModel } from './ListViewModel';

export const ListViewModelImpl = types
  .model({
    items: types.array(ListItemViewModelImpl),
  })
  .views(self => ({
    get count() {
      return self.items.length;
    },
  }))
  .actions(self => ({
    addItem: flow(function*(title: string) {
      const { useCases } = getAppContext(self);

      const newItem = yield useCases.addListItem({ title });
      self.items.push(newItem);
    }),
    fetch: flow(function*() {
      const { useCases } = getAppContext(self);

      self.items.clear();
      try {
        self.items = yield useCases.fetchList({});
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.error('Error', error);
      }
    }),
  }));

export function createListViewModel(): ListViewModel {
  return ListViewModelImpl.create();
}
