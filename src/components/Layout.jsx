import React from "react";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>World Cup Cafe | {pageTitle}</title>
      <h1>World Cup Cafe</h1>
      <Header />
    </>
  );
};

export default Layout;
