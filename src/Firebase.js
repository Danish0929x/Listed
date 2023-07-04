import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const firebaseConfig = {
    apiKey: "AIzaSyByWAVsyfGDMGTBIXtRH484Ijhqygqygzg",
    authDomain: "auth-app-b0d3d.firebaseapp.com",
    databaseURL: "https://auth-app-b0d3d-default-rtdb.firebaseio.com",
    projectId: "auth-app-b0d3d",
    storageBucket: "auth-app-b0d3d.appspot.com",
    messagingSenderId: "613059618309",
    appId: "1:613059618309:web:cd5fd6f75bcfa65a685e6c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
  
        const name = user.displayName;
        const email = user.email;
        const profilePic = user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
  
        // Redirect to the desired route after successful login
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  export const signOutUser = (navigate) => {
    const auth = getAuth();
    
    signOut(auth)
      .then(() => {
        // Clear the user data from local storage
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
  
        // Redirect to the login page or any desired route after logout
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };