// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_APIKEY,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN,
  // projectId:import.meta.env.VITE_PROJECTID,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_APPID,


  apiKey: "AIzaSyCpkmIprIC_z6Zk8UvscoiubiaI8tpGVeQ",
  authDomain: "set-up-projects.firebaseapp.com",
  projectId: "set-up-projects",
  storageBucket: "set-up-projects.appspot.com",
  messagingSenderId: "27845294488",
  appId: "1:27845294488:web:65b919fafecb65603953ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;