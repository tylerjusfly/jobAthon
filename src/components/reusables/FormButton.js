import React from "react";
import "../../assets/css/button.css";

export const FormButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="form-Button grid self-center mt-5 lg:mt-0 md:mt-0 mx-auto">
      Post Job
    </button>
  );
};
