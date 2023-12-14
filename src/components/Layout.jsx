import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import { motion } from "framer-motion";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <Hero />
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.75 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.main>
      <About />
    </>
  );
};

export default Layout;
