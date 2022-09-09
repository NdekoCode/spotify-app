import React from "react";

const ButtonForm = ({ text, type = "button" }) => {
  return (
    <div className="mt-8">
      <button
        type={type}
        className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonForm;
