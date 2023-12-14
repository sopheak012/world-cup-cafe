import * as React from "react";
import { motion } from "framer-motion";
import pizzaMain from "../images/about/pizza-main.png";
import topBorder from "../images/about/top-border.png";
import btmBorder from "../images/about/btm-border.png";

const About = () => (
  <section id="about">
    <div className="w-full h-full">
      <img src={topBorder} alt="" className="w-full" />
      <div className="bg-[#222] py-4 md:py-0">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, delay: 0.5 }}
        >
          Our Journey
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: true }}
        >
          <div className="max-w-screen-lg w-full grid px-4 sm:grid-cols-2 gap-8 mx-auto text-white">
            <div className="flex justify-center items-center">
              <img
                src={pizzaMain}
                alt="The founders of World Cup Cafe"
                className="rounded drop-shadow-lg"
              />
            </div>
            <div>
              <p className="pb-2">
                In 2009, after immigrating from Cambodia, our founders worked
                tirelessly to build up enough savings to realize their dream of
                opening a restaurant. Their dedication and hard work laid the
                foundation for what would become World Cup Cafe.
              </p>
              <p className="py-2">
                Today, World Cup Cafe stands as a testament to their journey and
                passion for providing a taste of authenticity. Our menu offers a
                diverse range of options, including mouthwatering pizzas,
                flavorful sandwiches, and refreshing smoothies. Each dish is
                crafted with care and reflects the dedication to quality that
                defines our establishment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <img src={btmBorder} alt="" className="w-full" />
    </div>
  </section>
);

export default About;
