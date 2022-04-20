// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import auth from '@react-native-firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCafy0xOjTTNZizJGDAhHoNXqqMQpJhH54",
  authDomain: "rescom-347118.firebaseapp.com",
  projectId: "rescom-347118",
  storageBucket: "rescom-347118.appspot.com",
  messagingSenderId: "121545648255",
  appId: "1:121545648255:web:349ebedba732df1a72374a",
  measurementId: "G-0DT895XNNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app};