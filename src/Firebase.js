// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getDatabase, onValue, ref, set } from "firebase/database";

import { firebase } from "@firebase/app";
import "@firebase/firestore";

//Golden

const firebaseConfig = {
  apiKey: "AIzaSyBQgBsiuvXbHY3qQoMSjgIJZDdl3mSXW30",
  authDomain: "golden-6f464.firebaseapp.com",
  projectId: "golden-6f464",
  storageBucket: "golden-6f464.appspot.com",
  messagingSenderId: "738995552673",
  appId: "1:738995552673:web:cee7cd87eecc6130214be0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerMicrosoft = new OAuthProvider('microsoft.com');


const storage = getStorage(app);
const firestore = getFirestore(app);
const db = getFirestore(app);
const realdb = getDatabase(app);

export { auth, provider, providerGit, providerFacebook, providerMicrosoft, db, storage, firestore, realdb };


