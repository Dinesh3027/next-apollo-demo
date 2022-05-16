import Card from './Card';

const UserDetails = ({users}) => {

  return (
      <div className='container-fluid'>
        <div className="row row-cols-4 justify-content-center">
          {users?.map((user) => (
            <div key={user.phone} className="col mt-3 mx-1">
              <Card user={user} key={user.phone} />
            </div>
          ))}
        </div>
      </div>
  );
};


export default UserDetails



