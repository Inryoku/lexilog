import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
  isLogin: boolean;
}>({
  user: null,
  loading: true,
  isLogin: false,
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isLogin: user !== null }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
