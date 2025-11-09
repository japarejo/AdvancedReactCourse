import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser debe usarse dentro de <UserProvider>");
  }
  return ctx;
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(name, role) {
    // Por defecto todo usuario empieza en el Lado Luminoso ;-P
    setUser({ name, role, forceSide: 'light' });
  }

  function logout() {
    setUser(null);
  }

  function setForceSide(side) {
    setUser((prev) => (prev ? { ...prev, forceSide: side } : prev));
  }

  const value = { user, isAuthenticated: !!user, login, logout, setForceSide };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
