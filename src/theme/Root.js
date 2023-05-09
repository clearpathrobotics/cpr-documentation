import React from 'react';
import { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

function Root({children}) {
  const [signInRequested, changeSignInRequested] = useState(false);
  const [isUserSignedIn, changeIsUserSignedIn] = useState(false);

  async function signOut() {
    try {
        await Auth.signOut();
        changeSignInRequested(false);
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  async function checkIfSignedIn() {
    try {
        await Auth.currentAuthenticatedUser();
        changeIsUserSignedIn(true);
        return true;
    } catch {
        changeIsUserSignedIn(false);
        return false;
    }
  }

  function handleClick() {
    changeSignInRequested(!signInRequested);
    checkIfSignedIn();
    if (signInRequested) signOut();
  }

  function FooterButton() {
    return (
      <button onClick={handleClick}>{isUserSignedIn ? 'Sign Out' : 'Sign In'}</button>
    )
  }

  // Checks if signed in using Auth, on page reload
  useEffect(() => {
    checkIfSignedIn()
    if (isUserSignedIn) changeSignInRequested(true);
  }, []);

  // Checks if signed in using Auth, every second
  useEffect(() => {
    const interval = setInterval(() => {
      checkIfSignedIn()
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  
  
  return (
    <>
      {children}
      <FooterButton />
      { signInRequested && <Authenticator variation="modal" hideSignUp={true}></Authenticator> }
    </>
  );
}

export default Root;
