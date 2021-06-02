import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import {FirebaseContext} from '../firebase/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../images/Logo.png'

export default function Navigation ({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const {user} = useContext(FirebaseContext);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <li
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
            >
              <Link to="/"><img src={Logo} alt="Logo" className="w-24 md:w-48"/></Link>
            </li>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >  <FontAwesomeIcon icon="bars" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/DirectMessage" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"><FontAwesomeIcon icon="paper-plane" /></Link>
              </li>
               <li className="nav-item">
                <Link to="/DirectMessage" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"><FontAwesomeIcon icon="heart" /></Link>
              </li>
              <li className="nav-item">
               { !!user ? (
                <Link to ="/SignIn" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">Sign Out</Link>
                  ) : (
                 <Link to ="/SignIn" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">Sign In</Link>
                )}
              </li>
             <li className="nav-item">
                <Link to="/Profile"  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
