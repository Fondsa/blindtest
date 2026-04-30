import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaFfaFxF9ZGkoRSbUUu3wMX91J5nLbiXU",
  authDomain: "blindtest-9ff2c.firebaseapp.com",
  databaseURL: "https://blindtest-9ff2c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blindtest-9ff2c",
  storageBucket: "blindtest-9ff2c.firebasestorage.app",
  messagingSenderId: "87852029231",
  appId: "1:87852029231:web:61bb320491a6de4259bdda"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const sanitize = (name) => name.replace(/[\.\$\#\[\]\/]/g, "_");
