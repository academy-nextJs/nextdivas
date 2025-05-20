import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-white mt-40 ">
      <main>
        {children}
      </main>
    </div>
  );
};
export default Layout;
