import { MongoClient } from 'mongodb';

let client: any;

const connectToDatabase = async () => {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
  }
  return client;
};

export const getCollection = async (collection: string) => {
  const client = await connectToDatabase();
  const db = client.db();
  return db.collection(collection);
};
