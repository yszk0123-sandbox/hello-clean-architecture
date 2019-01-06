export interface ListItem {
  id: string;
  title: string;
  done: boolean;
}

function generateId(): string {
  return String(Math.floor(Math.random() * 1000000));
}

export function createListItem(title: string): ListItem {
  return { id: generateId(), title, done: false };
}
