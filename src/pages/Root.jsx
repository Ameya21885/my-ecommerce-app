// import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;