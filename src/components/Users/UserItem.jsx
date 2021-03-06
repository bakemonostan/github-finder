import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// * user prop that is an object
// * remember to pass prop types also

function UserItem({ user: { login, avatar_url, id } }) {
  return (
    <div className='card shadow-md compact side bg-base-100' key={id}>
      <div className='flex-row items-center spcae-x-4 card-body' key={id}>
        <div key={id}>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div className='ml-4'>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
