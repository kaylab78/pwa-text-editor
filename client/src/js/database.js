import { openDB } from 'idb';
// import 'regnerator-runtime/runtime';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  
  // Connect to IndexedDB databse and the version to use
  const jateDb = await openDB('jate', 1);

  // New transaction specifying the store and data privileges
  const tx = jateDb.transaction('text', 'readonly');

  // Open object store
  const store = tx.objectStore('text');

  // Get all data in the database
  const request = store.getAll();

  // Confirmation of request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
