
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

  // db.onerror = function (e) {
  //   console.log("error");
  // };
  // if (method === "put") {
  //   store.put(object);
  // }
  // if (method === "clear") {
  //   store.clear();
  // }
  // if (method === "get") {
  //   const all = store.getAll();
  //   all.onsuccess = function () {
  //     resolve(all.result);
  //   };
  // }
  // tx.oncomplete = function () {
  //   db.close();
  // };
};

function saveRecord (transaction){
  //console.log(transaction)
  store.add (transaction);
}


