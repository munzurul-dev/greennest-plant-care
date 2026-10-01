import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
 const googleProvider = new GoogleAuthProvider();
   const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
 };
 const signInUser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
 };

 const googleSignIn = ()=>{
    return signInWithPopup(auth,googleProvider)
 }
  const authData = {
    createUser,
    signInUser,
    googleSignIn
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
