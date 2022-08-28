import { openDB } from 'idb';
// import 'regenerator-runtime/runtime';
/*
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
  const request = store.put({ id: 1, value: content });

  // Confirmation of request
  const result = await request;
  console.log('Data saved to database.', result.value);
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
  const request = store.get(1);

  // Confirmation of request
  const result = await request;
  console.log('result.value', result.value);
  return result.value;
};

initdb();
*/


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

export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};

  // Method that gets content from the IndexedDB database using the idb module
  export const getDb = async () => {
    console.log('GET from the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(1);
    const result = await request;
    result
      ? console.log('🚀 - data retrieved from the database', result.value)
      : console.log('🚀 - data not found in the database');
    // Check if a variable is defined and if it is, return it. See MDN Docs on Optional Chaining (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
    return result?.value;
  };

  initdb();