import React from 'react';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

function Root({children}) {
  const [signInRequested, changeSignInRequested] = useState(false);

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  function handleClick() {
    changeSignInRequested(!signInRequested);
    if (signInRequested) signOut();
  }

  function FooterButton() {
    return (
      <button onClick={handleClick}>{signInRequested ? 'Sign Out' : 'Sign In'}</button>
    )
  }
  
  return (
    <>
      {children}
      <FooterButton />
      { signInRequested && <Authenticator variation="modal"></Authenticator> }
    </>
  );
}

export default Root;
