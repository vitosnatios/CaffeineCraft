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
import { PuffLoader } from 'react-spinners';
import { FormEvent, useRef } from 'react';

const RegisterPage = () => {
  const { setLoggedIn } = useGlobalContext();
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
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
    if (
      !validate(emailRef) ||
      !validate(passwordRef) ||
      !validate(ageRef) ||
      !validate(nameRef)
    ) {
      return setError('Please fill all inputs.');
    }
    const form = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const { response, json } = await request('/api/register', {
      method: 'POST',
      body: JSON.stringify({ form }),
    });

    if (!json.success || !response!.ok) {
      return setError(
        json.message ||
          'Server had some internal problems. Please, try again later.'
      );
    }
    router.push('/profile');
    setLoggedIn(true);
  };

  return (
    <AuthContainer>
      <Form onSubmit={handleSubmit} name='Register'>
        <FormInput
          label='Name'
          name='name'
          type='text'
          placeholder='John Doe'
          refProp={nameRef}
        />
        <FormInput
          label='Age'
          name='age'
          type='number'
          placeholder='30'
          refProp={ageRef}
        />
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
          <div className='flex flex-wrap items-center gap-5'>
            <Button>Register</Button>
            <Link className='text-blue-500 hover:underline' href='/auth/login'>
              Already have an account? Login
            </Link>
          </div>
        )}
      </Form>
    </AuthContainer>
  );
};

export default RegisterPage;
