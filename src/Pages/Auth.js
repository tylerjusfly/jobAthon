import React from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();

  return <>{authStatus !== "authenticated" ? <Authenticator /> : navigate("/")}</>;
};

export default Auth;

// import { Storage } from "@aws-amplify/storage"

// await Storage.put("test.txt", "Hello");
