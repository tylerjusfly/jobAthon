import React from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {authStatus !== "authenticated" ? <Authenticator /> : navigate("/")}
    </div>
  );
};

export default Auth;

// import { Storage } from "@aws-amplify/storage"

// await Storage.put("test.txt", "Hello");
