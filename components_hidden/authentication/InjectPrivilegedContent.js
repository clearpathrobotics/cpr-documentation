import React from 'react';
import { useEffect, useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

async function fetchUserIsTrusted(setUserIsTrusted) {
  const {accessToken} = await Auth.currentSession();
  const cognitogroups = accessToken.payload['cognito:groups'];
  setUserIsTrusted(cognitogroups.includes('trusted') !== -1);
}

function PageContent(props) {
  return <props.content />
}

function InjectPrivilegedContent(props) {
  // when calling this function, pass a prop called 'content' with your markdown payload
  const [userIsTrusted, setUserIsTrusted] = useState(false);
  useEffect(() => {
    fetchUserIsTrusted(setUserIsTrusted);
  }, []);

  if (userIsTrusted) {
    return <PageContent content={props.content}/>
  } else {
    return null;
  } 
};

export default InjectPrivilegedContent;
