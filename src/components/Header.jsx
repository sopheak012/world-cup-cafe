import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Menu from "./Icons/Menu";
import X from "./Icons/X";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header>
      <motion.div
        className="fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#1b1b1b] border-b border-gray-300 text-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="logo">
          <Link
            to="hero"
            smooth
            duration={500}
            className="text-3xl font-semibold uppercase transition-all ease-in duration-500 hover:text-[#fe4039]"
          >
            World Cup Cafe
          </Link>
        </div>

        <div className="navigation">
          <nav>
            <div className="hidden md:flex">
              <Link to="about" smooth duration={500} className="mr-2 md:mr-4">
                Our Journey
              </Link>
              <Link to="menu" smooth duration={500} className="mx-2 md:mx-4">
                Menu
              </Link>
              <Link to="info" smooth duration={500} className="mx-2 md:mx-4">
                Info
              </Link>
              <Link to="contact" smooth duration={500} className="mx-2 md:ml-4">
                Contact
              </Link>
            </div>

            <div onClick={handleClick} className="md:hidden">
              {!nav ? <Menu /> : <X />}
              <div className={!nav ? "mobile-menu" : "mobile-menu active"}>
                <Link to="about" smooth duration={500} className="mt-8 mb-4">
                  Our Journey
                </Link>
                <Link to="menu" smooth duration={500} className="my-4">
                  Menu
                </Link>
                <Link to="info" smooth duration={500} className="my-4">
                  Info
                </Link>
                <Link to="contact" smooth duration={500} className="mt-4 mb-8">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
