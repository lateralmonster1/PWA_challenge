import { openDB } from 'idb';

const initDb = async () => {
  const db = await openDB('textEditor', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const getDb = async (content) => {
  const db = await openDB('textEditor', 1);
  const tx = db.transaction('notes', 'readwrite');
  const store = tx.objectStore('notes');
  store.put({ content, id: 1 });
  await tx.done;
};

export const putDb = async () => {
  const db = await openDB('textEditor', 1);
  const tx = db.transaction('notes', 'readonly');
  const store = tx.objectStore('notes');
  const result = await store.get(1);
  return result?.content;
};

initDb();
