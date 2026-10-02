import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const [bookings, setBookings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bookings") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const unsubscribe = () => {
    return signOut(auth).then(toast.success("Logged out successfully!"));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) {
      throw new Error("User is not logged in");
    }

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });

    setUser({
      ...auth.currentUser,
      displayName: name,
      photoURL: photoURL,
    });
  };

  const authData = {
    user,
    setUser,
    createUser,
    signInUser,
    googleSignIn,
    loading,
    setLoading,
    bookings,
    setBookings,
    unsubscribe,
    updateUserProfile,
    forgetPassword,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
