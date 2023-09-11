'use client';
import React from 'react';
import Button from '../generalElements/Button';
import { deleteCookie } from 'cookies-next';
import { useGlobalContext } from '@/app/context/GlobalContext';
import { useRouter } from 'next/navigation';

const ProfileLogoutButton = () => {
  const { setLoggedIn, setGlobalTrigger } = useGlobalContext();
  const route = useRouter();

  const handleClick = () => {
    deleteCookie('jwt');
    setLoggedIn(false);
    setGlobalTrigger((prev) => !prev);
    route.push('/');
  };

  return <Button onClick={handleClick}>Logout</Button>;
};

export default ProfileLogoutButton;
