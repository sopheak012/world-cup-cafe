import React, { useState } from "react";
import { motion } from "framer-motion";

import topBorderImg from "../images/info/top-border.png";
import btmBorderImg from "../images/info/btm-border.png";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("pizza"); // Default active section

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section id="menu">
      <div className="w-full md:h-screen">
        <img src={topBorderImg} alt="" className="w-full" />
        <div className="bg-[#222] py-4 md:py-0">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Menu
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: true }}
          >
            {/* MENU TABS */}
            <div className="max-w-screen-lg w-full grid sm:grid-cols-3 gap-4 mx-auto px-4 text-white">
              <div className="flex justify-center items-center">
                <button
                  onClick={() => handleSectionChange("pizza")}
                  className={`menu-tab ${
                    activeSection === "pizza" && "active"
                  }`}
                >
                  Pizza
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => handleSectionChange("sandwiches")}
                  className={`menu-tab ${
                    activeSection === "sandwiches" && "active"
                  }`}
                >
                  Sandwiches
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => handleSectionChange("beverages")}
                  className={`menu-tab ${
                    activeSection === "beverages" && "active"
                  }`}
                >
                  Beverages
                </button>
              </div>
            </div>

            {/* MENU CONTENT */}
            <div className="max-w-screen-lg w-full mx-auto px-4 text-white">
              {activeSection === "pizza" && (
                <div>
                  {/* Placeholder content for Pizza section */}
                  <h3 className="text-xl font-semibold mb-4">Pizza Menu</h3>
                  <p>Placeholder content for pizza menu...</p>
                </div>
              )}
              {activeSection === "sandwiches" && (
                <div>
                  {/* Placeholder content for Sandwiches section */}
                  <h3 className="text-xl font-semibold mb-4">
                    Sandwiches Menu
                  </h3>
                  <p>Placeholder content for sandwiches menu...</p>
                </div>
              )}
              {activeSection === "beverages" && (
                <div>
                  {/* Placeholder content for Beverages section */}
                  <h3 className="text-xl font-semibold mb-4">Beverages Menu</h3>
                  <p>Placeholder content for beverages menu...</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <img src={btmBorderImg} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Menu;
