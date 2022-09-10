import React from "react";
//import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
const Button = ({ value }) => {
  const hexColor = {
    color: "#f5f5f5",
  };

  return (
    <>
      {value ? (
        <button
          style={hexColor}
          disabled={true}
          className="self-center mt-5 lg:mt-0 md:mt-0 font-bold"
        >
          Apply
        </button>
      ) : (
        <button disabled={true} className="self-center mt-5 lg:mt-0 md:mt-0">
          <Link to="/">Apply</Link>
        </button>
      )}
    </>
  );
};

export default Button;
