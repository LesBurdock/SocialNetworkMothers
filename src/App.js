import React from 'react';
import { Route } from "react-router-dom";
import { AuthProvider } from "./firebase/context";
import SignIn from './components/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DirectMessage from './pages/DirectMessage';

const App = () => (
  <AuthProvider>
      <Route exact path="/" component={Home}/>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/DirectMessage" component={DirectMessage}/>
  </AuthProvider>
);

export default App;
