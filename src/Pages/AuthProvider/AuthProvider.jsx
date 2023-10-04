import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../Firebase.config/Congig.firebase";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // Sign in with Google 
      const googleLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }

      // Sign in with Github
      const githubLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, githubProvider)
      }

      // Sign in with Twitter
      const twitterLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, twitterProvider);
      }

      // create user | sign up | Register
      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      }

      // Log in
      const LogIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }

      // update profile | set Profile name
      const profileName = (name, img) => {
            setLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: img
            })
      }

      // Log out | sign Out
      const LogOut = () => {
            setLoading(true);
            return signOut(auth)
      }

      // reset Password
      const resetPassword = (email) => {
            setLoading(true);
            return sendPasswordResetEmail(auth, email)
      }

      // Observer to observe current user
      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  setUser(user)
                  setLoading(false)
            })
      }, [])

      console.log('76', user);

      // value
      const authentication = {
            googleLogin,
            createUser,
            LogIn,
            user,
            LogOut,
            profileName,
            resetPassword,
            githubLogin,
            loading,
            twitterLogin
      }

      return (
            <AuthContext.Provider value={authentication}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;

AuthProvider.propTypes = {
      children: PropTypes.node
}