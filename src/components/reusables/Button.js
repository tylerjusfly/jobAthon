import React from "react";
import { Link } from "react-router-dom";
const Button = ({ value, id, company, position }) => {
  const hexColor = {
    color: "#f5f5f5",
  };

  return (
    <>
      {value ? (
        <button
          style={hexColor}
          disabled={true}
          className="self-center mt-5 lg:mt-0 md:mt-0 font-bold cursor-not-allowed"
        >
          Apply
        </button>
      ) : (
        <button className="self-center mt-5 lg:mt-0 md:mt-0">
          <Link to={`/apply/${id}/${company}/${position}`}>Apply</Link>
        </button>
      )}
    </>
  );
};

export default Button;
