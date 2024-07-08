// src/context/AuthProvider.d.ts
declare module '../../context/AuthProvider' {
    import { Context } from 'react';
    
    interface User {
      uid: string;
      email: string;
      displayName: string;
    }
  
    interface AuthContextType {
      user: User | null;
      loading: boolean;
      register: (fullName: string, email: string, password: string) => Promise<void>;
      login: (email: string, password: string) => Promise<void>;
      logout: () => Promise<void>;
    }
  
    export const AuthContext: Context<AuthContextType>;
  }
  