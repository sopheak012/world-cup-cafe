import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import topBorderImg from "../images/info/top-border.png";
import btmBorderImg from "../images/info/btm-border.png";
import pizzaImage from "../images/about/pizza-main.png";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("pizza"); // Default active section

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    // Set the initial active section to "pizza" on mount
    handleSectionChange("pizza");
  }, []);

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
                <div className="text-white">
                  {/* Pizza section */}
                  <h3 className="text-3xl font-semibold mb-4">
                    Pizza Toppings
                  </h3>

                  {/* Container for Image and Toppings */}
                  <div className="flex flex-col items-center mb-8">
                    {/* Image for Pizza */}
                    <img
                      src={pizzaImage} // Replace with your actual pizza image path
                      alt="Pizza"
                      className="w-64 h-64 object-cover rounded-lg mb-4"
                    />

                    {/* List of Toppings - Display 3 toppings per row */}
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        "Pepperoni",
                        "Sausage",
                        "Bacon",
                        "Ham",
                        "Mushroom",
                        "Bell Pepper",
                        "Jalapeño",
                        "Pineapple",
                        "Olive",
                      ].map((topping, index) => (
                        <div key={index} className="p-4 text-red-500">
                          {topping}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "sandwiches" && (
                <div className="text-white">
                  {/* Sandwiches section */}
                  <h3 className="text-3xl font-semibold mb-4">
                    Sandwiches Menu
                  </h3>

                  {/* Container for Image and Toppings */}
                  <div className="flex flex-col items-center mb-8">
                    {/* Placeholder Image */}
                    <img
                      src={pizzaImage} // Replace with your actual placeholder image path
                      alt="Sandwich"
                      className="w-64 h-64 object-cover rounded-lg mb-4"
                    />

                    {/* List of Toppings - Display 3 toppings per row */}
                    <div className="grid grid-cols-3 gap-6">
                      {["Ham", "Turkey", "Roast Beef", "Pastrami", "Tuna"].map(
                        (topping, index) => (
                          <div key={index} className="p-4 text-red-500">
                            {topping}
                          </div>
                        )
                      )}
                    </div>
                  </div>
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
