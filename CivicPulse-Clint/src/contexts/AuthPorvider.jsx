import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // Auth states
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // creating new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // signin user
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUser = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };
  // signout
  const signout = () => {
    return signOut(auth);
  };

  // on state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("users on on state change: ", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Auth Info
  const authInfo = {
    loading,
    setLoading,
    createUser,
    signin,
    googleSignIn,
    signout,
    user,
    updateUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
