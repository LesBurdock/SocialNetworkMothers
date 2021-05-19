import React, { useContext } from 'react';
import { FirebaseAuth } from "react-firebaseui";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {FirebaseContext} from '../firebase/context';


// hoe to mange usdrs with firebase https://firebase.google.com/docs/auth/web/manage-users
// need to configure react firebase ui https://www.npmjs.com/package/react-firebaseui

  export default function SignIn() {
  //get the user state from the context
  //actually this should be {user} but cannot destructure user is user is undefined...
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
  console.log(user);
//if user exists or signed in, we redirect the page to home, else display the sign in methods with FirebaseAuth
  return (
    <div>

      { !!user ? (
        <div>
          <p>you are signed in</p>
        </div>
      ) : (
        <div>
          <p>Please Sign In</p>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      )}
    </div>
  );
}
