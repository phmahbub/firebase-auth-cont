// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2hIhdl_vjAYwK2mj2a4R0FAnM2XFmOtU",
  authDomain: "fir-auth-cont.firebaseapp.com",
  projectId: "fir-auth-cont",
  storageBucket: "fir-auth-cont.appspot.com",
  messagingSenderId: "1077412159560",
  appId: "1:1077412159560:web:ad06df78c46d104715f87d",
  measurementId: "G-FGB7C308DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app