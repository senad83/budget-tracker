
const request = window.indexedDB.open("budgetTracker", 1);
let db,
  tx,
  store;

  var storeName = "transactions";
request.onupgradeneeded = function (e) {
  const db = request.result;
  db.createObjectStore(storeName, { keyPath: "_id" });
};

request.onerror = function (e) {
  console.log("There was an error");
};

request.onsuccess = function (e) {
  db = request.result;
  tx = db.transaction(storeName, "readwrite");
  store = tx.objectStore(storeName);

};

function saveRecord (transaction){
  //console.log(transaction)
  store.add (transaction);
}


