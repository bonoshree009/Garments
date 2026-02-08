import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const registerUser = async (email, password, name, photoURL) => {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(result.user, {
      displayName: name,
      photoURL,
    });
    return result;
  };

  // Login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/logout`,
      {},
      { withCredentials: true }
    );
    return signOut(auth);
  };

  // Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // 🔥 Request JWT from backend
        await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: currentUser.email },
          { withCredentials: true }
        );
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
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
