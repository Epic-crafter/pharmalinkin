// UserContext.tsx
"use client"
import { createContext, useContext, ReactNode } from 'react';

interface UserContextType {
  userId: string | null;
  userRole: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
  userId: string | null;
  userRole: string | null;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children, userId, userRole }) => {
  return (
    <UserContext.Provider value={{ userId, userRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
