import React from 'react';
import { useEffect, useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

import BlockedPageContent from "./blockedPageContent.mdx"

async function fetchUserIsEmployee(setUserIsEmployee) {
  const {accessToken} = await Auth.currentSession();
  const cognitogroups = accessToken.payload['cognito:groups'];
  setUserIsEmployee(cognitogroups.includes('employee') !== -1);
}

function PageContent(props) {
  return <props.content />
}

function Page(props) {
  const [userIsEmployee, setUserIsEmployee] = useState(false);
  
  useEffect(() => {
    fetchUserIsEmployee(setUserIsEmployee);
  }, []);

  if (userIsEmployee) {
    return <PageContent content={props.content}/>
  } else {
    return <BlockedPageContent />;
  } 
};

export default Page;
