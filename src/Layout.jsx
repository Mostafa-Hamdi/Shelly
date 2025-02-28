import React from "react";
import Header from "./main components/Header";
import Footer from "./main components/Footer";
import JoinForm from "./main components/JoinForm";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <JoinForm />
      <Footer />
    </>
  );
};

export default Layout;
