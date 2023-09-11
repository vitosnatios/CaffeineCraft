'use client';
import React from 'react';
import Button from '../generalElements/Button';
import { deleteCookie } from 'cookies-next';
import { useGlobalContext } from '@/app/context/GlobalContext';

const ProfileLogoutButton = () => {
  const { setLoggedIn } = useGlobalContext();
  const handleClick = () => {
    deleteCookie('jwt');
    setLoggedIn(false);
    return window.location.replace('/');
  };

  return <Button onClick={handleClick}>Logout</Button>;
};

export default ProfileLogoutButton;
