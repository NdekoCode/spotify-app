import React from "react";

const MainContent = ({ children }) => {
  return (
    <main className="grid place-items-center mt-5 p-5">
      <div>{children}</div>
    </main>
  );
};

export default MainContent;
