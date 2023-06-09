import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth,googleAuth);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () =>{
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
    });
    return ()=>{
        unsubscribe();
        setLoading(false);
    }
  },[])
  
  const data = {
    user,
    signUp,
    signIn,
    logOut,
    googleSignIn,
    updateUserProfile,
    loading
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
