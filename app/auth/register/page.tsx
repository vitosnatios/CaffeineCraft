import AuthContainer from '@/app/components/auth/AuthContainer';
import Form from '@/app/components/form/Form';
import FormInput from '@/app/components/form/FormInput';
import Button from '@/app/components/generalElements/Button';
import { registerUser } from '@/app/database/user/registerUser';
import { addToCart } from '@/helpers/cookiesHelper';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const RegisterPage = () => {
  const handleSubmit = async (formdata: FormData) => {
    'use server';
    const form = {
      name: formdata.get('name'),
      age: formdata.get('age'),
      email: formdata.get('email'),
      password: formdata.get('password'),
    };
    console.log(form);

    const res = await registerUser(form);
    if (typeof res === 'object' && 'message' in res && res!.message) {
      throw new Error(res!.message || null);
    }
    cookies().set('jwt', res);
    return redirect('/profile');
  };

  return (
    <AuthContainer>
      <Form action={handleSubmit} name='Register'>
        <>
          <FormInput
            label='Name'
            name='name'
            type='text'
            placeholder='John Doe'
          />
          <FormInput label='Age' name='age' type='number' placeholder='30' />
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
