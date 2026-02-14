import { Profiler, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  updateProfile,
} from "firebase/auth";

import { app } from "../Firebse.config";
import { AuthContext } from "./AuthContext";


const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const registerUser =(email, password,) => {
    setLoading(true)
    return createUserWithEmailAndPassword( auth, email,password);
    };

  // Login
  const loginUser = (email, password) => {
       setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

   const updateUserProfile =(profile)=>{
    return updateProfile(auth.currentUser, profile)
   }
  // Google Login
  const googleLogin = () => {
       setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout =()=> {
    return signOut(auth);
  };

  // Auth State Observer
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    logout,
  };

  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;
