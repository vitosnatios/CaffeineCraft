import Link from 'next/link';
import Button from '../components/generalElements/Button';
import Title from '../components/text/Title';

const AuthPage = () => {
  return (
    <div className='bg-gray-100 py-8 flex flex-col items-center'>
      <Title>Authentication</Title>
      <div className='flex gap-5'>
        <Link href='/auth/register'>
          <Button>Register</Button>
        </Link>
        <Link href='/auth/login'>
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
