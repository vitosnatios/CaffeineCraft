import { MongoClient } from 'mongodb';

let client: any;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
  }

  return client;
}
