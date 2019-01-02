import { observer } from 'mobx-react';
import React from 'react';
import { render } from 'react-dom';
import { createApp, IAppModel } from './models';

const App = observer(({ list }: IAppModel) => {
  const onClick = () => list.addItem('new');

  return (
    <div>
      There are {list.count} items!
      <ul>
        {list.items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={onClick}>Add</button>
    </div>
  );
});

async function main() {
  const app = createApp();
  render(<App list={app.list} />, document.getElementById('app'));
}

main().catch(console.error);
