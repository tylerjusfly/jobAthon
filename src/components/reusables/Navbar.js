import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "../../assets/css/navbar.css";

export const Navbar = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { signOut } = useAuthenticator((context) => [context.user]);
  return (
    <nav className="Navbar flex justify-between items-center mx-auto px-4 py-4">
      <Link to="/">
        <img src={logo} alt="logo" width={35} />
      </Link>
      <ul className="Nav-List flex items-center gap-6 mr-4">
        {route === "authenticated" ? (
          <>
            <li className="dropdown">
              <span className="dropp--btn">Profile</span>
              <div className="dropdown--content">
                <Link className="links" to="myjobs">
                  My Jobs
                </Link>
                <Link className="links" to="/apply">
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
    </nav>
  );
};
