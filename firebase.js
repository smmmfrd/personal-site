import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCf-iTRHJKQLhIPVb7S8wP73XuFf2r7nAQ",
    authDomain: "personal-site-33513.firebaseapp.com",
    projectId: "personal-site-33513",
    storageBucket: "personal-site-33513.appspot.com",
    messagingSenderId: "840517554495",
    appId: "1:840517554495:web:6631889d6ffe781b49438a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };