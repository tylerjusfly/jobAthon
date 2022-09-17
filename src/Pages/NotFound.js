import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-start justify-center h-screen">
      <div className="text-center bg-black text-white max-w-lg m-20 p-10 rounded-lg">
        <div className="text-2xl font-bold p-5">Page 404 - NOT FOUND </div>
        <p className="text-l font-bold p-3">
          Sorry! Could not find the page you were looking for.{" "}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
