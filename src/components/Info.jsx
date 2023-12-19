import React from "react";
import { motion } from "framer-motion";
import MapPin from "./Icons/MapPin";
import Phone from "./Icons/Phone";
import Clock from "./Icons/Clock";

import topBorderImg from "../images/info/top-border.png";
import infoMap from "../images/info/infoMap.png";
import btmBorderImg from "../images/info/btm-border.png";

const Info = () => (
  <section id="info">
    <div className="w-full md:h-screen">
      <img src={topBorderImg} alt="" className="w-full" />
      <div className="bg-[#222] py-4 md:py-0">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Information
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: true }}
        >
          <p className="mb-8 text-white text-center italic">
            Closed select holidays and during planned closures.
            <br />
            Free parking available.
          </p>

          <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-4 mx-auto px-4 text-white">
            <div className="flex justify-center items-center">
              <img
                src={infoMap}
                alt="World Cup Cafe Location"
                className="mr-4 drop-shadow-md"
              />
            </div>
            {/* CONTACT INFO */}
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex self-start items-center">
                <span className="w-[20px] h-[20px] text-[#fe4039] mr-3">
                  <MapPin />
                </span>
                <p className="font-medium uppercase">Location :</p>
              </div>
              <div>
                <p>
                  629 W Anaheim St
                  <br />
                  Wilmington, CA 90744
                </p>
              </div>
              <div className="flex self-start items-center">
                <span className="w-[18px] h-[18px] text-[#fe4039] mr-3">
                  <Phone />
                </span>
                <p className="font-medium uppercase">Phone :</p>
              </div>
              <div>
                <p>(562) 481-0302</p>
              </div>
              {/* HOURS OF OPERATION. */}
              <div className="flex self-start items-center">
                <span className="w-[20px] h-[20px] text-[#fe4039] mr-3">
                  <Clock />
                </span>
                <p className="font-medium uppercase">Hours of Operation :</p>
              </div>
              <div></div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Sun</p>
              </div>
              <div className="flex items-center">
                <p>5 am to 8 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Mon</p>
              </div>
              <div className="flex items-center">
                <p>5 am to 8 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Tues</p>
              </div>
              <div className="flex items-center">
                <p>5 am to 8 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Thurs</p>
              </div>
              <div className="flex items-center">
                <p>5 am to 8 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Wed</p>
              </div>
              <div className="flex items-center">
                <p>5 am to 8 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Fri</p>
              </div>
              <div className="flex items-center">
                <p>5 am to 8 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Sat</p>
              </div>
              <div className="flex items-center">
                <p>5 am to 8 pm</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <img src={btmBorderImg} alt="" className="w-full" />
    </div>
  </section>
);

export default Info;
