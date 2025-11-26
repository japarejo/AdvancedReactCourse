import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// Contexto centralizado para identidad de usuario y acciones (login/logout/cambiar lado).
const UserContext = createContext(null);

// Custom hook con error claro si falta el provider.
// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser debe usarse dentro de <UserProvider>");
  }
  return ctx;
}

// Proveedor que mantiene el estado global de usuario y expone acciones.
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((name, role) => {
    setUser({ name, role, forceSide: "light" });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  // Este es el setForceSide correcto: al cambiar de lado, también ajusta el rol.
  // Dark -> Sith, Light -> Jedi.
  const setForceSide = useCallback((side) => {
    setUser((prev) => {
      if (!prev) return prev;
      const nextRole = side === "dark" ? "Sith" : "Jedi";
      return { ...prev, forceSide: side, role: nextRole };
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      setForceSide,
      setUser,
    }),
    [user, login, logout, setForceSide]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
