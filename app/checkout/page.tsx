'use client';
import { ICartProduct, IUser } from '@/helpers/types';
import Button from '../components/generalElements/Button';
import { useRouter } from 'next/navigation';
import CheckoutItem from '../components/checkout/CheckoutItem';
import { useEffect, useState } from 'react';
import useFetch from '../custom-hooks/useFetch';
import { PuffLoader } from 'react-spinners';
import Title from '../components/text/Title';
import Link from 'next/link';
import SectionContainer from '../components/container/SectionContainer';

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
  if (error) throw new Error(error);
  if (loading) return <PuffLoader className='text-blue-500 m-auto mt-10' />;
  if (!checkoutData.cartItems) return;
  if (!checkoutData.cartItems.length)
    return (
      <SectionContainer>
        <Title>Checkout</Title>
        <div className='my-4 text-xl font-semibold text-gray-800'>
          You haven&apos;t pick anything yet
        </div>
        <Link href='/shop'>
          <Button onClick={handleBuy}>Continue Shopping</Button>
        </Link>
      </SectionContainer>
    );
  return (
    <SectionContainer>
      <Title>Checkout</Title>
      <div className='grid gap-4 md:grid-cols-2'>
        {checkoutData.cartItems.map((item: ICartProduct, index: number) => (
          <CheckoutItem key={index} item={item} />
        ))}
      </div>
      <div className='my-4 text-xl font-semibold text-gray-800'>
        Total Price: R${totalPrice}
      </div>
      <Button onClick={handleBuy}>Proceed to Payment (Buy)</Button>
      <Link href='/' className='ml-4 text-gray-600 hover:text-blue-500'>
        Continue Shopping
      </Link>
    </SectionContainer>
  );
};

export default CheckoutPage;
