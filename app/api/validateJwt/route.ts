import { NextResponse } from 'next/server';
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

// type Data = { id: string } | { message: string };

export async function POST(request: Request) {
  try {
    const { jwt: token } = await request.json();
    const decoded = await jwt.verify(token, jwtSecret);

    if (decoded) {
      const { id } = decoded.data;
      return NextResponse.json({ id });
    } else {
      return NextResponse.json({ message: 'Invalid token.' });
    }
  } catch (err: any) {
    return NextResponse.json({ message: 'Error while trying to verify jwt' });
  }
}
