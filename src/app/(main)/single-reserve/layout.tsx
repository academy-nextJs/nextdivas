import React from "react";

const SingleReserveLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="login-layout">
      <div className="login-header"></div>
      <div className="login-content">{children}</div>
    </div>
  );
};

export default SingleReserveLayout;
