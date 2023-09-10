import { isProduct } from '@/helpers/isProduct';
import { connectToDatabase } from './connect';
import { IProduct } from '@/helpers/types';

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection('products');
    const products = await collection.find({}).toArray();
    const productsFromJson = products.filter(isProduct);
    const _idToString = productsFromJson.map((prod: IProduct) => {
      return { ...prod, _id: String(prod._id) };
    });
    return _idToString;
  } catch (error) {
    return [];
  }
};
