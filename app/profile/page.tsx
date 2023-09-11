import ProfileLogoutButton from '../components/profile/ProfileLogoutButton';
import { getUserByJwt } from '../database/user/getUserByJwt';

const ProfilePage = async () => {
  const user = await getUserByJwt();

  if (!user) throw new Error('You are not logged in.');
  return (
    <div className='bg-gray-100 p-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold mb-4'>Profile</h1>
        <ProfileLogoutButton />
      </div>
      <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
        <h2 className='text-xl font-semibold mb-2'>User Information</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-xl font-semibold mb-2'>Coffee History</h2>
        <ul>
          {/* {user.history?.map((coffee, index) => (
            <li key={index} className='mb-2'>
              {coffee.name} - ${coffee.price}
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
