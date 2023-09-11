import AuthContainer from '@/app/components/auth/AuthContainer';
import Form from '@/app/components/form/Form';
import FormInput from '@/app/components/form/FormInput';
import Button from '@/app/components/generalElements/Button';
import { logginUser } from '@/app/database/user/logginUser';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const LoginPage = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';
    const email = formdata.get('email');
    const password = formdata.get('password');
    const res: any = await logginUser(email, password);
    if (typeof res === 'object' && 'message' in res && res!.message) {
      throw new Error(res!.message || null);
    }
    redirect('/profile');
  };

  return (
    <AuthContainer>
      <Form action={handleSubmit} name='Login'>
        <>
          <FormInput
            label='Email Address'
            name='email'
            type='email'
            placeholder='you@example.com'
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            placeholder='********'
          />
          <div className='flex justify-between items-center'>
            <Button trigger delay>
              Login
            </Button>
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
