import { createContext, useContext, useState, useEffect } from 'react';
import { validateJwt } from '../database/user/jwt';

type Props = { children: React.ReactElement };

const GlobalContext = createContext<{
  loggedIn: boolean;
}>({
  loggedIn: false,
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isJwtValid = await validateJwt();
      if (isJwtValid) return setLoggedIn(true);
      return setLoggedIn(false);
    };
    checkAuth();
  }, []);
  return (
    <GlobalContext.Provider value={{ loggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
