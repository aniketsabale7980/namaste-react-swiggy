import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";
import UserContext from "./utils/UserContext";

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
  const [user, setUser] = useState({
    name: "Aniket",
    email: "aniket@gmail.com",
  });

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default AppLayout;
