import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyAD1_UVWcjuEEvxWlBBMe9Humy5KUOl1YQ",
      authDomain: "auth-glasses-2ba62.firebaseapp.com",
      projectId: "auth-glasses-2ba62",
      storageBucket: "auth-glasses-2ba62.appspot.com",
      messagingSenderId: "225390310092",
      appId: "1:225390310092:web:8eb80b9eb81bb86c70c869"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;