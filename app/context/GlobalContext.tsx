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
}>({
  loggedIn: false,
  setLoggedIn: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState<boolean | string>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isJwtValid = await validateJwt();
      if (isJwtValid) return setLoggedIn(isJwtValid);
      setLoggedIn(false);
    };
    checkAuth();
  }, []);
  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
