import React, { createContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';


export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, email, password
      );

      // Signed-in Firebase user
      const currentUser = userCredential.user;
      
      setUser(currentUser);
      console.log("Firebase user logged in: ", currentUser);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (displayName, email, password) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, email, password
      );

      await updateProfile(auth.currentUser, {
        displayName: displayName
      });

      // Signed-in Firebase user
      const currentUser = userCredential.user;

      setUser(currentUser);
      console.log("Firebase user created: ", currentUser);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      console.log("User logged out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};