
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
  const [role, setRole] = useState(null);

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
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (!currentUser?.email) {
      setRole(null);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/users/${encodeURIComponent(currentUser.email)}`
      );

      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setRole(data.role);
    } catch (err) {
      console.error("Role fetch failed:", err.message);
      setRole(null);
    } finally {
      setLoading(false);
    }
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
    logout, role
  };

  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;
