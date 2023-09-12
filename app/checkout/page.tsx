'use client';
import { getUserByJwt } from '../database/user/getUserByJwt';
import { cookies } from 'next/headers';
import { isCartProduct } from '@/helpers/isProduct';
import { ICartProduct, IUser } from '@/helpers/types';
import Button from '../components/generalElements/Button';
import { buyCoffees } from '@/helpers/buyCoffees';
import { redirect, useRouter } from 'next/navigation';
import CheckoutItem from '../components/checkout/CheckoutItem';
import { useEffect, useState } from 'react';
import useFetch from '../custom-hooks/useFetch';
import Error from '../components/form/Error';
import { PuffLoader } from 'react-spinners';
import { revalidatePath } from 'next/cache';

const CheckoutPage = () => {
  const router = useRouter();
  const { loading, error, request, setError } = useFetch();
  const [checkoutData, setCheckoutData] = useState<{
    user: IUser | null;
    cartItems: ICartProduct[] | null;
  }>({
    user: null,
    cartItems: null,
  });

  let totalPrice;
  if (checkoutData.cartItems) {
    totalPrice = checkoutData?.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  useEffect(() => {
    const loadCheckoutData = async () => {
      const { response, json } = await request('/api/checkout', {});
      if ((!json.user && !json.carItems) || !response!.ok) {
        return setError(
          json.message ||
            'Server had some internal problems. Please, try again later.'
        );
      }
      const { user, cartItems } = json;
      setCheckoutData({ user, cartItems });
    };
    loadCheckoutData();
  }, [request, setError]);

  const handleBuy = async () => {
    const { response, json } = await request('/api/checkout', {
      method: 'POST',
    });
    if (json && 'success' in json) {
      router.push('/profile');
      router.refresh();
      console.log(window.location.href);
    }
  };
  if (loading) return <PuffLoader className='text-blue-500 m-auto mt-10' />;
  if (error) return <Error message={error} />;
  if (!checkoutData.cartItems) return;
  if (!checkoutData.cartItems.length)
    return (
      <div className='container mx-auto py-8 bg-gray-100'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-4'>Checkout</h1>
        <div className='mt-8 text-xl font-semibold text-gray-800'>
          You haven&apos;t pick anything yet
        </div>
        <div className='mt-8'>
          <Button onClick={handleBuy}>Proceed to Payment (Buy)</Button>
          <a href='/' className='ml-4 text-gray-600 hover:text-blue-500'>
            Continue Shopping
          </a>
        </div>
      </div>
    );
  return (
    <div className='container mx-auto py-8 bg-gray-100'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-4'>Checkout</h1>
      <div className='grid gap-4 md:grid-cols-2'>
        {checkoutData.cartItems.map((item: ICartProduct, index: number) => (
          <CheckoutItem key={index} item={item} />
        ))}
      </div>
      <div className='mt-8 text-xl font-semibold text-gray-800'>
        Total Price: R${totalPrice}
      </div>
      <div className='mt-8'>
        <Button onClick={handleBuy}>Proceed to Payment (Buy)</Button>
        <a href='/' className='ml-4 text-gray-600 hover:text-blue-500'>
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default CheckoutPage;
