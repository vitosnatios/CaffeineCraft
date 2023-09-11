const jwt = require('jsonwebtoken');
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const jwtSecret = process.env.JWT_SECRET;

export async function GET(request: Request) {
  try {
    const jwtCookie = cookies().get('jwt');
    if (!jwtCookie) return NextResponse.json('Invalid token.');
    const token = jwtCookie.value;
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
