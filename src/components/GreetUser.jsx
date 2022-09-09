import React from 'react';

const GreetUser = ({ user }) => {
  return (
    <h1 className="text-center text-3xl sm:text-4xl lg:text-4xl">
      <span className="text-gray-500">Hi, </span>
      <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
        {user ? user : 'Arick Bulakali.'}
      </span>
      <span>👋</span>
    </h1>
  );
};

export default GreetUser;
