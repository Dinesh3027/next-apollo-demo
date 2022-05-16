
import UserDetails from '../components/UserDetails';
import client from '../lib/with-apollo';
import GET_ALL_USERS from '../queries/getAllUsers';

export default function Home ({users}) {
  const handleClick = (e, path) => {
    if (path !== "") {
      console.log("I clicked on the About Page");
    }
  };
  return (
    <>
      <header>
        <h1 className="text-center m-5">User Cards</h1>
      </header>
      <UserDetails users={users} />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='d-flex w-100 align-items-center justify-content-center m-4 p-4'>
              <button type='button' className='btn btn-primary btn-lg' onClick={(e) => handleClick(e, "20")}>Load More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * To generate a page at build time,
 * use getStaticProps() from Next.js 
 * which allows you to download 
 * resources at build time directly.
 * @returns users data as props 
 */
 export async function getStaticProps() {
  const { loading , error,  data} = await client.query({
    query: GET_ALL_USERS });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return {
    props: {
      users: data.loading ? [] : data?.users
    },
  };
}


