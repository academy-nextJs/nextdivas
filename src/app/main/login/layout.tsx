import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="login-layout">
      <div className="login-header"></div>
      <div className="login-content">{children}</div>
    </div>
  );
};

export default LoginLayout;
