import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  //console.log(user.attributes.email);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <button className="self-center mt-5 lg:mt-0 md:mt-0">
      <Link to={authStatus !== 'authenticated' ? <Authenticator /> : '/'}>Apply</Link>
    </button>
  );
};

export default Button;
