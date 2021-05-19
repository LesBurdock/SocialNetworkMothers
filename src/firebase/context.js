import React, { useEffect , useState } from 'react'
import fire from './fire';

export const FirebaseContext = React.createContext();


// Every Context object has a Provider that allows other components to consume its context.
// In this case, our AuthProvider will provide the state of user to other components.
// This is so that any component in our app can determine whether a user has signed in and access the user's properties.
// The user state is initialized as null with the useState hook and is updated using the useEffect hook and Firebase's auth().onAuthStateChanged(setUser).
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <FirebaseContext.Provider value={{ user }}>{children}</FirebaseContext.Provider>
  );
};

export default AuthProvider;
