'use client';
import AuthContainer from '@/app/components/auth/AuthContainer';
import Error from '@/app/components/form/Error';
import Form from '@/app/components/form/Form';
import FormInput from '@/app/components/form/FormInput';
import Button from '@/app/components/generalElements/Button';
import { logginUser } from '@/app/database/user/logginUser';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  const [err, setErr] = useState<string | null>('');
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
    setErr(null);
    const res: any = logginUser(form.email, form.password);
    if (typeof res === 'object' && 'message' in res && res!.message) {
      return setErr(res!.message || null);
    }
    return window.location.replace('/');
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
          {err && <Error message={err} />}
        </>
      </Form>
    </AuthContainer>
  );
};

export default LoginPage;
