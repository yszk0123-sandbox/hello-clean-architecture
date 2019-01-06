import React from 'react';
import { ListItemViewModel } from '../viewModels/ListItemViewModel';

interface ListProps {
  count: number;
  items: Array<ListItemViewModel>;
  onClick(): void;
}

export const List: React.FunctionComponent<ListProps> = ({
  count,
  items,
  onClick,
}) => {
  return (
    <div>
      There are {count} items!
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={onClick}>Add</button>
    </div>
  );
};
