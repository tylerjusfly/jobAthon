import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";

export const Navbar = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { signOut } = useAuthenticator((context) => [context.user]);
  return (
    <div className="Navbar">
      <h2 className="Nav-logo">
        <Link to="/"> JobAThon</Link>
      </h2>
      <ul className="Nav-List">
        {route === "authenticated" ? (
          <>
            <li className="dropdown">
              <span className="dropp--btn">Profile</span>
              <div className="dropdown--content">
                <Link className="links" to="myjobs">
                  My Jobs
                </Link>
                <Link className="links" to="applied">
                  Applied Jobs
                </Link>
                <span className="links" onClick={signOut}>
                  SignOut
                </span>
              </div>
            </li>
            <li>
              <Link to="/create-job">Post Job</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        )}
        <li>
          <Link to="/jobs">Find Jobs</Link>
        </li>
      </ul>
    </div>
  );
};
