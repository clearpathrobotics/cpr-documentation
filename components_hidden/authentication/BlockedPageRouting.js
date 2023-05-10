import React from 'react';
import { useEffect, useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

import BlockedPageContent from "./blockedPageContent.mdx"

async function fetchUserIsTrusted(setUserIsTrusted) {
  const {accessToken} = await Auth.currentSession();
  const cognitogroups = accessToken.payload['cognito:groups'];
  setUserIsTrusted(cognitogroups.includes('trusted') !== -1);
}

function PageContent(props) {
  return <props.content />
}

function Page(props) {
  const [userIsTrusted, setUserIsTrusted] = useState(false);
  
  useEffect(() => {
    fetchUserIsTrusted(setUserIsTrusted);
  }, []);

  if (userIsTrusted) {
    return <PageContent content={props.content}/>
  } else {
    return <BlockedPageContent />;
  } 
};

export default Page;
