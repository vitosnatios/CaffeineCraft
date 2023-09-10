import { connectToDatabase } from '@/app/database/connect';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection('products');
    const products = await collection.find({}).toArray();
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching data:', error);
    NextResponse.json({ message: 'Internal Server Error' });
  }
}
