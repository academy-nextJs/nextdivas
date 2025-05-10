import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="login-layout">
      <div className="login-header">Welcome to the Login Page</div>
      <div className="login-content">{children}</div>
    </div>
  );
};

export default ContactLayout;
