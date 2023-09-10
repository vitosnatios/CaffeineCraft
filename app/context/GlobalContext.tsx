import { isProduct } from '@/helpers/isProduct';
import { IProduct } from '@/types';
import { createContext, useContext, useState, useEffect } from 'react';

type Props = { children: React.ReactElement };

const GlobalContext = createContext<{
  products: IProduct[];
}>({
  products: [],
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('/api/getProducts');
      const { products: produ } = await res.json();
      const productsFromJson = produ.filter(isProduct);
      const _idToString = productsFromJson.map((prod: IProduct) => {
        return { ...prod, _id: prod._id };
      });
      setProducts(_idToString);
    };
    getProducts();
  }, []);
  return (
    <GlobalContext.Provider value={{ products }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
