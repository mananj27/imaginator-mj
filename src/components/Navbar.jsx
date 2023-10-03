// import React from 'react'
// import { Link } from 'react-router-dom'
// import {useAuthState} from 'react-firebase-hooks/auth';
// import {Auth} from "../firebase_config"
// import { signOut } from 'firebase/auth';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useNavigate } from 'react-router-dom';
// import logo from './logo.png'; // Replace 'logo.png' with your actual image file path

// const Navbar = () => {
//   const [user] = useAuthState(Auth)
//   const navigator = useNavigate()
//   const logOut = async () => {
//     await signOut(Auth)
//     navigator("/")
//   }
//   return (
//     <header className="bg-sky-500 text-white py-4 px-6 flex items-center justify-between">
//         <img src={logo}       
//           style={{ width: '20%' }}
//           alt="company logo" 
//           className='w-20'/>      
//         {/* <h3>Imaginator</h3> */}

//         <div className="menu">
//             <Link className='link text-lg px-4 py-2 rounded hover:bg-white-700' to="/">Home</Link>
//             {user && <Link className='link link text-lg px-4 py-2 rounded hover:bg-white-700' to={"/generate"}>Generate</Link>}
//             {user? <div className='link'><div className='flex items-center'><img className='logo w-8 h-8 rounded-full' src={user.photoURL} alt="" />  <button onClick={logOut}><LogoutIcon/></button></div></div>
//             : <Link className='link' to={"/login"}>Login</Link>
//             }
//         </div>
//     </header>
//   )
// }
// <style>


// </style>
// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth } from '../firebase_config';
import { signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
  const [user] = useAuthState(Auth);
  const navigator = useNavigate();

  const logOut = async () => {
    await signOut(Auth);
    navigator('/');
  };

  return (
    <header className="bg-yellow-100 text-black py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="company logo" className="w-70 h-24" />
      </div>

      <nav className="space-x-4 flex items-center">
        <Link
          to="/"
          className="text-lg px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Home
        </Link>
        {user && (
          <Link
            to="/generate"
            className="text-lg px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Generate
          </Link>
        )}
        {user ? (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={logOut}
              className="text-lg px-2 py-1 rounded hover:bg-blue-700 transition duration-300"
            >
              <LogoutIcon />
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-lg px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

