'use client';
import AuthContainer from '@/app/components/auth/AuthContainer';
import Form from '@/app/components/form/Form';
import FormInput from '@/app/components/form/FormInput';
import Button from '@/app/components/generalElements/Button';
import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage = () => {
  const [form, setForm] = useState<{ [key: string]: string }>({
    email: '',
    password: '',
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <AuthContainer>
      <Form handleSubmit={handleSubmit} name='Login'>
        <>
          <FormInput
            label='Email Address'
            name='email'
            type='email'
            placeholder='you@example.com'
            onChange={handleChange}
            value={form.email}
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            placeholder='********'
            onChange={handleChange}
            value={form.password}
          />
          <div className='flex justify-between items-center'>
            <Button>Login</Button>
            <Link
              className='text-blue-500 hover:underline'
              href='/auth/register'
            >
              Don&apos;t have an account? Register
            </Link>
          </div>
        </>
      </Form>
    </AuthContainer>
  );
};

export default LoginPage;
