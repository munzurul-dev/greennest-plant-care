// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP77-wBQyGTFNLAizE_gTIB_S-XZ7DPRM",
  authDomain: "greennest-plant.firebaseapp.com",
  projectId: "greennest-plant",
  storageBucket: "greennest-plant.firebasestorage.app",
  messagingSenderId: "841922373994",
  appId: "1:841922373994:web:83759ba8284a2151111d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth