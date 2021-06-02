import React from 'react';
import { Route } from "react-router-dom";
import { AuthProvider } from "./firebase/context";
import SignIn from './components/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DirectMessage from './pages/DirectMessage';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import autoprefixer from 'autoprefixer';

library.add(faHome, faBars, faHeart, faPaperPlane)

const App = () => (
  <AuthProvider>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/DirectMessage" component={DirectMessage}/>
    </div>
  </AuthProvider>
);

export default App;
