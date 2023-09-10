'use client';
import AuthContainer from '@/app/components/auth/AuthContainer';
import Form from '@/app/components/form/Form';
import FormInput from '@/app/components/form/FormInput';
import Button from '@/app/components/generalElements/Button';
import Link from 'next/link';
import React, { useState } from 'react';

const RegisterPage = () => {
  const [form, setForm] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    age: '',
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
      <Form handleSubmit={handleSubmit} name='Register'>
        <>
          <FormInput
            label='Name'
            name='name'
            type='text'
            placeholder='John Doe'
            onChange={handleChange}
            value={form.name}
          />
          <FormInput
            label='Age'
            name='age'
            type='number'
            placeholder='30'
            onChange={handleChange}
            value={form.age}
          />
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
            <Button>Register</Button>
            <Link className='text-blue-500 hover:underline' href='/auth/login'>
              Already have an account? Login
            </Link>
          </div>
        </>
      </Form>
    </AuthContainer>
  );
};

export default RegisterPage;
