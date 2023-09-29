import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv4ymaL7-U6QP8KPOMU4pjs69JVgR0fUE",
  authDomain: "blogmoppe.firebaseapp.com",
  projectId: "blogmoppe",
  storageBucket: "blogmoppe.appspot.com",
  messagingSenderId: "549963445020",
  appId: "1:549963445020:web:7c6c7d1e26221e623000d9"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };