// src/context/AuthProvider.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';
import app from '../firebase/firebase.config'; // adjust this path based on your project structure

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authenticateWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const register = async (fullName: string, email: string, password: string) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await updateProfile(user, {
        displayName: fullName,
      });

      await setDoc(doc(db, 'users', user.uid), {
        fullName,
        email,
        uid: user.uid,
        role: 'user',
      });

      // Manually setting the user object with the fullName property
      setUser({ ...user, displayName: fullName });
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred');
      }
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // Fetching user document to get the full name
      const userDoc = await getDoc(doc(db, 'users', res.user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        // Manually setting the user object with the fullName property
        setUser({ ...res.user, displayName: userData?.fullName });
      } else {
        setUser(res.user);
      }
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof Error) {
        if (error.message.includes('Failed to get document because the client is offline')) {
          console.error("Network error: Unable to fetch document because the client is offline.");
          alert("Network error: Unable to fetch document because the client is offline.");
        } else {
          console.error(error.message);
        }
      } else {
        console.error('An unknown error occurred');
      }
      throw error;
    }
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
  };

  const authenticateWithGoogle = async () => {
    setLoading(true);
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          fullName: user.displayName,
          email: user.email,
          uid: user.uid,
          role: 'user',
        });
      }

      setUser(user);
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof Error) {
        if (error.message.includes('Failed to get document because the client is offline')) {
          console.error("Network error: Unable to fetch document because the client is offline.");
          alert("Network error: Unable to fetch document because the client is offline.");
        } else {
          console.error(error.message);
        }
      } else {
        console.error('An unknown error occurred');
      }
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Fetching user document to get the full name
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // Manually setting the user object with the fullName property
            setUser({ ...currentUser, displayName: userData?.fullName });
          } else {
            setUser(currentUser);
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            if (error.message.includes('Failed to get document because the client is offline')) {
              console.error("Network error: Unable to fetch document because the client is offline.");
              alert("Network error: Unable to fetch document because the client is offline.");
            } else {
              console.error(error.message);
            }
          } else {
            console.error('An unknown error occurred');
          }
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, authenticateWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
