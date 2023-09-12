import { isProduct } from '@/helpers/isProduct';
import { getCollection } from '../connect';

export const getProductByName = async (slug: string) => {
  try {
    const collection = await getCollection('products');
    const productsSlugNames = await collection.find({ image: slug });
    const [result] = (await productsSlugNames.toArray()).filter(isProduct);
    if (result) {
      delete result._id;
      return result;
    }
    throw new Error(`Coffee ${slug} not found.`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
