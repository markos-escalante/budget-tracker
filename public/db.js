let db; 

const request = window.indexedDB.open("budgettracker", 1);

request.onupgradeneeded = event => {
  const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
    
};

request.onsuccess = function(event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Oh no! " + event.target.errorCode);
};

const saveRecord = (record) => {
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");

    store.add(record);
}
