import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";
import React from "react";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
