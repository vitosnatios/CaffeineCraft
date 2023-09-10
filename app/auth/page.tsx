import Link from 'next/link';

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <div className='bg-gray-100 py-8 px-4 flex flex-col items-center'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-4'>
        Authentication
      </h1>
      <div className='flex flex-col md:flex-row items-center gap-5'>
        <Link
          href='/auth/register'
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
        >
          Register
        </Link>
        <Link
          href='/auth/login'
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
