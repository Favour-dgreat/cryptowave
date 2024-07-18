import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import {  auth, db } from '../firebase/firebase.config'; 

const googleProvider = new GoogleAuthProvider();

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  registerUser: (data: { email: string; password: string; fullName: string; phoneNumber: string, username: string }) => Promise<void>;
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

 
  const registerUser = async (data: { email: string; password: string; fullName: string; phoneNumber: string, username: string }) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = res.user;
      await updateProfile(user, {
        displayName: data.fullName,
      });

      const docRef = doc(collection(db, "users"), user.uid);
      console.log(docRef, user);
    
      await setDoc(docRef, {
        email: user.email,
        fullName: user.displayName,
        uid: user.uid,
        phoneNumber: user.phoneNumber,
        
      });

      // Manually setting the user object with the fullName property
      setUser({ ...user, displayName: data.fullName });
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
      console.log(res)
      const userDoc = await getDoc(doc(db, 'users', res.user.uid));
      console.log(userDoc)
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log(userData)
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
    <AuthContext.Provider value={{ user, loading, registerUser, login, logout, authenticateWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
