const jwt = require('jsonwebtoken');
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const jwtSecret = process.env.JWT_SECRET;

export async function GET() {
  try {
    const jwtCookie = cookies().get('jwt');
    if (!jwtCookie) throw new Error('Invalid token.');
    const token = jwtCookie.value;
    const decoded = await jwt.verify(token, jwtSecret);
    if (!decoded) throw new Error('Invalid token.');
    const { id } = decoded.data;
    return NextResponse.json({ id });
  } catch (err: any) {
    return NextResponse.json({ message: 'Error while trying to verify jwt' });
  }
}

export const dynamic = 'force-dynamic';
