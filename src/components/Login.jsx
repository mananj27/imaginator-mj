import React from 'react';
import { Auth, Provider } from '../firebase_config';
import { signInWithPopup } from 'firebase/auth';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const signIn = () => {
    signInWithPopup(Auth, Provider)
      .then((res) => {
        console.log('Sign In');
        console.log('Came here and returned response is ', res);
        sessionStorage.setItem('userName', 'XYZ');
        window.location.href = '/';
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page text-center">
      <Typography variant="h2" className="mb-4 text-4xl font-extrabold text-black-600">
        Login
      </Typography>
      {/* Add some space below the login text */}
      <div className="mb-4" />
      <Button
        onClick={signIn}
        variant="contained"
        color="primary"
        startIcon={<GoogleIcon />}
        className="hover:shadow-md hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;

