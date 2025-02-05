import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";

/**
 * create the multiple bundle for the Instamart
 * chunking
 * Code splitting
 * Dynamic Bundling
 * Lazy loading
 * On demand Loading
 * Dynamic import
 */
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
