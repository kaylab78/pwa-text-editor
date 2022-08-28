import { openDB } from 'idb';

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

// Logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database.')
  
  // Connect to database and version
  const jateDb = await openDB('jate', 1);

  // New transaction specifying store and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open object store
  const store = tx.objectStore('jate');

  // Update content. 
  const request = store.put({ id: 1, value: content });

  // Confirmation of request
  const result = await request;
  console.log('Data saved to database.', result.value);
};


// Logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET data from database.')
  
  // Connect to IndexedDB databse and the version to use
  const jateDb = await openDB('jate', 1);

  // New transaction specifying the store and data privileges
  const tx = jateDb.transaction('jate', 'readonly');

  // Open object store
  const store = tx.objectStore('jate');

  // Get all data in the database
  const request = store.get(1);

  // Confirmation of request
  const result = await request;
  console.log('result.value', result.value);
  return result.value;
};

initdb();