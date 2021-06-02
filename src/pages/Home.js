import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import SignIn from '../components/SignIn';
import {FirebaseContext} from '../firebase/context';

const Home = () => {
  const {user} = useContext(FirebaseContext);
  return(
    <div>
      { !!user ? (
        <div>
            <Navigation></Navigation>
            <p className='text-red-700'>home page</p>
        </div>
      ) : (
        <SignIn></SignIn>
      )}
    </div>
  )

}
export default Home;
