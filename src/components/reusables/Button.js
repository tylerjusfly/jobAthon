import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { Link } from "react-router-dom";
const Button = ({ signIn }) => {
  //console.log(user.attributes.email);
  //const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <button onClick={signIn} className="self-center mt-5 lg:mt-0 md:mt-0">
      <Link to="/">Apply</Link>
    </button>
  );
};

export default withAuthenticator(Button);
