import { useState, useContext } from 'react';
import { searchUsers } from '../../context/github/GithubActions';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  //   const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter a search value', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      {users && (
        <div>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full pr-40 bg-gray-200 input input-lg text-black'
                  placeholder='Search'
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
                <button
                  type='submit'
                  className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <div>
        {users.length > 0 && (
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
