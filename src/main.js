import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/index.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCud7fRp_OItaQ5tsZbJ_KER7UMa20mg7M",
  authDomain: "tahc-auth.firebaseapp.com",
  projectId: "tahc-auth",
  storageBucket: "tahc-auth.firebasestorage.app",
  messagingSenderId: "1044811700841",
  appId: "1:1044811700841:web:161c480328a9d073de60f8",
  measurementId: "G-TREGXE7MR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
