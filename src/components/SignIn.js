import React, { useContext } from 'react';
import { FirebaseAuth } from "react-firebaseui";
import firebase from 'firebase';
import {FirebaseContext} from '../firebase/context';
import Home from '../pages/Home';
import Logo from '../images/Logo.png'


// hoe to mange usdrs with firebase https://firebase.google.com/docs/auth/web/manage-users
// need to configure react firebase ui https://www.npmjs.com/package/react-firebaseui

  export default function SignIn() {
  //get the user state from the context
  const {user} = useContext(FirebaseContext);

  //this is our config for FirebaseAuth
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  return (
    <div>
      { !!user ? (
      <div>
          <h1>My App</h1>
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <a className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium" onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
      ) : (
        <div className='m-auto max-w-xs flex-auto bg-white text-center'>
          <img src={Logo} alt="Logo" className='self-center'/>
          <p>Sign In to see photos and content from your friends</p>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      )}
    </div>
  );
}
