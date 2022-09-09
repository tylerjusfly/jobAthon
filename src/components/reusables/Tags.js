import React from "react";

export const Tags = ({ tag }) => {
  const notags = tag ? (
    <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
      {tag}
    </li>
  ) : null;
  return <>{notags}</>;
};
