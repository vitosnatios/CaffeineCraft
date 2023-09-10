import { getCollection } from '../connect';

export const getProductsSlugNames = async (fieldName: string) => {
  const collection = await getCollection('products');
  const productsSlugNames = await collection.find(
    {},
    { projection: { [fieldName]: 1 } }
  );
  return productsSlugNames.toArray();
};
