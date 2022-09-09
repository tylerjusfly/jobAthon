import React from "react";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white mt-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
        <p className="text-center font-bold">Built with ❤️ for the Hasnnode x Aws Amplify Hackathon</p>
        <p className="text-center">
          &copy; {date} <a href="#">TylerJusFly</a>
        </p>
      </div>
    </footer>
  );
};
