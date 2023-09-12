'use client';
import AuthContainer from '@/app/components/auth/AuthContainer';
import Error from '@/app/components/form/Error';
import Form from '@/app/components/form/Form';
import FormInput from '@/app/components/form/FormInput';
import Button from '@/app/components/generalElements/Button';
import { useGlobalContext } from '@/app/context/GlobalContext';
import useFetch from '@/app/custom-hooks/useFetch';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef } from 'react';
import { PuffLoader } from 'react-spinners';

const LoginPage = () => {
  const { setLoggedIn } = useGlobalContext();
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { loading, error, request, setError } = useFetch();

  const validate = (ref: any): ref is { current: { value: string } } => {
    if (
      ref &&
      'current' in ref &&
      'value' in ref.current &&
      ref.current.value.trim() !== ''
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: FormEvent<Element>) => {
    e.preventDefault();
    if (!validate(emailRef) || !validate(passwordRef)) {
      return setError('Please fill all inputs.');
    }
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { response, json } = await request('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (!json.success || !response!.ok) {
      return setError(
        json.message ||
          'Server had some internal problems. Please, try again later.'
      );
    }

    setLoggedIn(true);
    router.push('/profile');
  };

  return (
    <AuthContainer>
      <Form onSubmit={handleSubmit} name='Login'>
        <>
          <FormInput
            label='Email Address'
            name='email'
            type='email'
            placeholder='you@example.com'
            refProp={emailRef}
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            placeholder='********'
            refProp={passwordRef}
          />
          {error && <Error message={error} />}
          {loading ? (
            <PuffLoader className='m-auto' color='rgb(59 130 246)' />
          ) : (
            <div className='flex justify-between flex-wrap items-center gap-5'>
              <Button>Login</Button>
              <Link
                className='text-blue-500 hover:underline'
                href='/auth/register'
              >
                Don&apos;t have an account? Register
              </Link>
            </div>
          )}
        </>
      </Form>
    </AuthContainer>
  );
};

export default LoginPage;
