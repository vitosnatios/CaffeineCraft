import { getCookie, setCookie } from 'cookies-next';
import { isCartProduct } from './isProduct';
import { ICartProduct } from './types';

export const getCookies = (key: string): ICartProduct[] | [] => {
  const cookies = JSON.parse(getCookie(key) || '[]');
  return cookies.filter(isCartProduct);
};

export const hasOnCookiesAlready = (name: string, field: string) => {
  const cookies = getCookies(field);
  return cookies.find(({ name: prodName }) => prodName === name);
};

const addToCart = (toAdd: unknown, field: string) => {
  setCookie(field, JSON.stringify(toAdd));
};

export const AddToCart = (
  name: string,
  price: number,
  image: string,
  imgWidth: number,
  imgHeight: number,
  field: string
) => {
  const prevCookies = getCookies(field);
  const hasAlready = hasOnCookiesAlready(name, field);
  if (!hasAlready) {
    const updatedCookie = [
      ...prevCookies,
      { name, price, quantity: 1, image, imgWidth, imgHeight },
    ];
    addToCart(updatedCookie, 'cart');
  }
};

export const deleteFromCart = (name: string, field: string) => {
  if (hasOnCookiesAlready(name, field)) {
    const newCookie = getCookies(field).filter(
      ({ name: prodName }) => prodName !== name
    );
    addToCart(newCookie, 'cart');
  }
};
