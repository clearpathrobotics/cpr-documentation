import React from "react";
import { Auth } from 'aws-amplify';

async function signOut() {
  console.log('SignOut button was pressed')
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

function SignOutButton() {
  return (
    <button onClick={signOut}>Sign Out</button>
  )
}

export default SignOutButton;
