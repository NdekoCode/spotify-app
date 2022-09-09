import React from "react";

const FieldInput = ({ label, type = "text", id, placeHolder = "" }) => {
  return (
    <div className="mt-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        placeholder={placeHolder}
        type={type}
      />
    </div>
  );
};

export default FieldInput;
