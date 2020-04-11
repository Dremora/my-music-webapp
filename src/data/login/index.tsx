import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface LoginContextType {
  isLoggedIn: boolean;
  onLoggedIn: (token: string) => void;
  onLoggedOut: () => void;
  token: string | null;
}

const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  onLoggedIn: () => {},
  onLoggedOut: () => {},
  token: null,
});

interface Props {
  children: ReactNode;
}

export const LoginProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const onLoggedIn = useCallback((newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  }, []);

  const onLoggedOut = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
  }, []);

  return (
    <LoginContext.Provider
      value={{ onLoggedOut, onLoggedIn, isLoggedIn: !!token, token }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};
