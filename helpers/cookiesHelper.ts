import { getCookie, setCookie } from 'cookies-next';
import { isCartProduct } from './isProduct';
import { IProduct } from './types';

const getCookies = (): IProduct[] | [] => {
  const cookies = JSON.parse(getCookie('cart') || '[]');
  return cookies.filter(isCartProduct);
};

export const hasOnCookiesAlready = (name: string) => {
  const cookies = getCookies();
  return cookies.find(({ name: prodName }) => prodName === name);
};

export const AddToCart = (name: string, price: number) => {
  const prevCookies = getCookies();
  const hasAlready = hasOnCookiesAlready(name);
  if (!hasAlready) {
    const updatedCookie = [...prevCookies, { name, price, quantity: 1 }];
    setCookie('cart', JSON.stringify(updatedCookie));
  }
};
