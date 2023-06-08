// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCLnxMXZaR2Zfzygy5XK-mAQem-AYewokk",
//   authDomain: "summer-sounds-academy.firebaseapp.com",
//   projectId: "summer-sounds-academy",
//   storageBucket: "summer-sounds-academy.appspot.com",
//   messagingSenderId: "735235790595",
//   appId: "1:735235790595:web:2c3096cc78fa6f059dfb36"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;