import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDTM9hn4QBq_QQb1frzipCAzaiOzATh-vA",
    authDomain: "kppneus-89fca.firebaseapp.com",
    projectId: "kppneus-89fca",
    storageBucket: "kppneus-89fca.appspot.com",
    messagingSenderId: "887329265249",
    appId: "1:887329265249:web:fc11dff23e5dd06e20fc20"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };