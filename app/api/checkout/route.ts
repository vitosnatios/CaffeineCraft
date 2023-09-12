import { getUserByJwt } from '@/app/database/user/getUserByJwt';
import { buyCoffees } from '@/helpers/buyCoffees';
import { isCartProduct } from '@/helpers/isProduct';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const user = await getUserByJwt();
    const carCache = cookies().get('cart');

    if (!user) throw new Error('You are not logged in.');
    if (
      !carCache ||
      ('value' in carCache && !carCache.value) ||
      (Array.isArray(carCache) && !carCache.length)
    ) {
      new Error('Yor cart is empty.');
    }
    const cartItems = [...JSON.parse(carCache!.value)].filter(isCartProduct);

    return NextResponse.json({ user, cartItems });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST() {
  try {
    const carCache = cookies().get('cart');
    const cartItems = [...JSON.parse(carCache!.value)].filter(isCartProduct);
    const totalPrice = cartItems?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    if (!cartItems.length) throw new Error('No itens inside the card.');
    const res = await buyCoffees(cartItems, totalPrice);
    cookies().delete('cart');
    return NextResponse.json({ success: res });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

// export const dynamic = 'force-dynamic';
