// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence
  } from 'firebase/auth/react-native';
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9P_skQzhhV25B7tFymf2e6oNGjVKn_og",
  authDomain: "chatbottest-23f55.firebaseapp.com",
  projectId: "chatbottest-23f55",
  storageBucket: "chatbottest-23f55.appspot.com",
  messagingSenderId: "891235083995",
  appId: "1:891235083995:web:b9bae00474d5fdc6744efe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  
  export { auth };