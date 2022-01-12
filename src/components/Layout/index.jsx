import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ height: "100vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
