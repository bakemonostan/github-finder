import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  return (
    <>
      {!loading && (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user) => (
            <>
              <UserItem key={users.id} user={user} />
            </>
          ))}
        </div>
      )}
      {loading && <Spinner />}
    </>
  );

  // return <Spinner />;
}

export default UserResults;
