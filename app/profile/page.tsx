import SectionContainer from '../components/container/SectionContainer';
import HistoryItem from '../components/profile/HistoryItem';
import ProfileLogoutButton from '../components/profile/ProfileLogoutButton';
import { getUserByJwt } from '../database/user/getUserByJwt';

type Prod = { name: string; price: number; quantity: number };

const ProfilePage = async () => {
  const user = await getUserByJwt();

  if (!user) throw new Error('You are not logged in.');
  return (
    <SectionContainer>
      <div className='flex justify-between items-start'>
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
          {user.history
            ?.map(({ products, totalPrice }: any, ind: number) => {
              return (
                <li key={ind} className='mb-4 rounded-lg'>
                  {products.map((prod: Prod, index: number) => (
                    <HistoryItem key={index * Math.random()} prod={prod} />
                  ))}
                  <p className='text-lg font-semibold p-3 bg-white shadow-md'>
                    Total: R${totalPrice.toFixed(2)}
                  </p>
                </li>
              );
            })
            .reverse()}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default ProfilePage;
