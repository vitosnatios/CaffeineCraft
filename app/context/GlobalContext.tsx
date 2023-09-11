'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import { validateJwt } from '../database/user/jwt';

type Props = { children: React.ReactElement };

const GlobalContext = createContext<{
  loggedIn: boolean | string;
  setLoggedIn: Dispatch<SetStateAction<string | boolean>>;
  setGlobalTrigger: Dispatch<SetStateAction<boolean>>;
}>({
  loggedIn: false,
  setLoggedIn: () => {},
  setGlobalTrigger: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean | string>(false);
  const [globalTrigger, setGlobalTrigger] = useState<boolean>(false);

  useEffect(() => {
    console.log('global context');

    const checkAuth = async () => {
      const isJwtValid = await validateJwt();
      if (isJwtValid) return setLoggedIn(isJwtValid);
      setLoggedIn(false);
    };
    checkAuth();
  }, [globalTrigger]);
  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn, setGlobalTrigger }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
