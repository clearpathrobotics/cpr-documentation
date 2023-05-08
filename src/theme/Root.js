import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

function Root({children}) {
  return (
    <>
      {children}
    </>
  );
}

export default withAuthenticator(Root);
