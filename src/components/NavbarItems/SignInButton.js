import React from "react";
import { Auth } from 'aws-amplify';

async function signIn() {
  console.log('SignIn button was pressed')
  try {
      await null;
  } catch (error) {
      console.log('error signing in: ', error);
  }
}

function SignInButton() {
  return (
    <button onClick={signIn}>Sign In</button>
  )
}

export default SignInButton;

