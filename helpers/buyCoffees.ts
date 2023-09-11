'use server';

import { getUserByJwt } from '@/app/database/user/getUserByJwt';
import { ICartProduct } from './types';
import { getCollection } from '@/app/database/connect';

export const buyCoffees = async (
  cartItems: ICartProduct[],
  totalPrice: number
) => {
  const products = cartItems.map(({ name, price, quantity }) => ({
    name,
    price,
    quantity,
  }));
  const user = await getUserByJwt();
  const newPurchase = {
    totalPrice,
    products,
  };
  if (!user) throw new Error('You are not logged in.');
  const productsCollection = await getCollection('products');
  const areInStock = await checkIfThereAreItensOutOfStockAndSubtractItToBuy(
    productsCollection,
    products
  );
  if (areInStock) {
    const collection = await getCollection('users');
    const result = await collection.updateOne(
      { email: user.email },
      { $push: { history: newPurchase } }
    );
    if (!result.modifiedCount) throw new Error('Failed on the purchase.');
  }
  return true;
};

const checkIfThereAreItensOutOfStockAndSubtractItToBuy = async (
  productsCollection: any,
  products: { name: string; price: number; quantity: number }[]
) => {
  const collection = productsCollection;
  const queryNames = products.map((item) => item.name);
  const projection = {
    _id: 0,
    name: 1,
    stock: 1,
    bought: 1,
  };
  const result = await collection
    .find({ name: { $in: queryNames } })
    .project(projection)
    .toArray();

  const areInStock = products.map((item) => {
    const itemFromDb = result.find((dbItem: any) => dbItem.name === item.name);
    if (item.quantity <= itemFromDb.stock) {
      return true;
    }
    return false;
  });
  const thereIsSomeOutOfStock = areInStock.find((item) => item === false);
  if (thereIsSomeOutOfStock) throw new Error('Some item is out of stock.');
  //  compra
  const updatedStockandBought = products.map((item) => {
    return {
      name: item.name,
      stock: -item.quantity,
      bought: +item.quantity,
    };
  });
  const updateOperations = updatedStockandBought.map(
    ({ name, stock, bought }) => ({
      updateOne: {
        filter: { name },
        update: {
          $inc: {
            stock,
            bought,
          },
        },
      },
    })
  );
  const result2 = await collection.bulkWrite(updateOperations);
  return result2.modifiedCount;
};
