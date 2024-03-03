import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import  'firebase/compat/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkslxqpCJQBQo82cfXA8JccLsg2-Ma0LY",
  authDomain: "socialmediaapp-3d92a.firebaseapp.com",
  projectId: "socialmediaapp-3d92a",
  storageBucket: "socialmediaapp-3d92a.appspot.com",
  messagingSenderId: "719329131393",
  appId: "1:719329131393:web:6a63f7049e6fc853368680"
};

export const app = firebase.initializeApp(firebaseConfig);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
