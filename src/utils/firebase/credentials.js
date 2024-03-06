// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPU7ZKMbMDCYezksb5Lz7Vd1Ro_1k3wPA",
  authDomain: "vacantes-react.firebaseapp.com",
  projectId: "vacantes-react",
  storageBucket: "vacantes-react.appspot.com",
  messagingSenderId: "477043415396",
  appId: "1:477043415396:web:2106f4d7ef5852627a8271"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;