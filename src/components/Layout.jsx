import React from "react";
import Header from "./Header";
import Hero from "./Hero";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Layout;
