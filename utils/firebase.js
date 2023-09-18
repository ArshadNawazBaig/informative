// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'informative-398707.firebaseapp.com',
  projectId: 'informative-398707',
  storageBucket: 'informative-398707.appspot.com',
  messagingSenderId: '522432454795',
  appId: '1:522432454795:web:ca2a295a4687087f24f48e',
  measurementId: 'G-J2JL3HRHWH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
