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

export const addToCart = (toAdd: unknown, field: string, toJson = true) => {
  setCookie(field, toJson ? JSON.stringify(toAdd) : toAdd, {
    sameSite: 'none',
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
  });
};

export const addOneToCart = (
  name: string,
  price: number,
  image: string,
  imgWidth: number,
  imgHeight: number,
  field: string,
  quantity: number = 1
) => {
  const prevCookies = getCookies(field);
  const hasAlready = hasOnCookiesAlready(image, field);
  if (!hasAlready) {
    const updatedCookie = [
      ...prevCookies,
      { name, price, image, imgWidth, imgHeight, quantity },
    ];
    addToCart(updatedCookie, field);
  }
};

export const deleteFromCart = (name: string, field: string) => {
  if (hasOnCookiesAlready(name, field)) {
    const newCookie = getCookies(field).filter(
      ({ name: prodName }) => prodName !== name
    );
    addToCart(newCookie, field);
  }
};

export const changeQuantityFromAItem = (
  name: string,
  field: string,
  quantity: number
) => {
  const prevCookies = getCookies(field);
  const itemToChangeQuantity = prevCookies.find(
    ({ name: prodName }) => prodName === name
  );
  if (itemToChangeQuantity) {
    const updatedCookies = prevCookies.map((coffee) => {
      if (coffee.name === name) {
        return {
          ...coffee,
          quantity,
        };
      }
      return coffee;
    });
    addToCart(updatedCookies, 'cart');
  }
};
