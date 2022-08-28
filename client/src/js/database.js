import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

const initdb = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  })
};

// TODO: Add logic to a method that accepts some content and adds it to the database - Done
export const putDb = async (content) => {
  console.log('PUT to the database.')
  
  // Connect to database and version
  const jateDb = await openDB('jate', 1);

  // New transaction specifying store and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open object store
  const store = tx.objectStore('jate');

  // Update content. 
  const request = store.put({ content: content });

  // Confirmation of request
  const result = await request;
  console.log('Data saved to database.', result);
};

// TODO: Add logic for a method that gets all the content from the database - Done
export const getDb = async () => {
  console.log('GET data from database.')
  
  // Connect to IndexedDB databse and the version to use
  const jateDb = await openDB('jate', 1);

  // New transaction specifying the store and data privileges
  const tx = jateDb.transaction('jate', 'readonly');

  // Open object store
  const store = tx.objectStore('jate');

  // Get all data in the database
  const request = store.getAll();

  // Confirmation of request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
