import { ICartProduct, IProduct } from '@/helpers/types';

export const isProduct = (product: unknown): product is IProduct => {
  if (
    product &&
    typeof product === 'object' &&
    'id' in product &&
    'name' in product &&
    'description' in product &&
    'image' in product &&
    'price' in product &&
    'stock' in product &&
    'bought' in product &&
    'imgWidth' in product &&
    'imgHeight' in product &&
    typeof product.id === 'number' &&
    typeof product.name === 'string' &&
    typeof product.description === 'string' &&
    typeof product.image === 'string' &&
    typeof product.price === 'number' &&
    typeof product.stock === 'number' &&
    typeof product.bought === 'number' &&
    typeof product.imgWidth === 'number' &&
    typeof product.imgHeight === 'number'
  ) {
    return true;
  }
  return false;
};

export const isCartProduct = (product: unknown): product is ICartProduct => {
  if (
    product &&
    typeof product === 'object' &&
    'name' in product &&
    'price' in product &&
    'quantity' in product &&
    typeof product.name === 'string' &&
    typeof product.price === 'number' &&
    typeof product.quantity === 'number'
  ) {
    return true;
  }
  return false;
};
