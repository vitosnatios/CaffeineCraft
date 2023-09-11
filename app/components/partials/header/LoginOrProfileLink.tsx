import { useGlobalContext } from '@/app/context/GlobalContext';
import Link from 'next/link';

const LoginOrProfileLink = () => {
  const { loggedIn } = useGlobalContext();

  return (
    <Link
      href={loggedIn ? '/profile' : '/auth'}
      className='text-gray-300 hover:text-white block'
    >
      {loggedIn ? 'Profile' : 'Login'}
    </Link>
  );
};

export default LoginOrProfileLink;
