import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
export default function Testimonials() {
  const [selectd, setselectd] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "steing", duration: 3 };

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>التوصيات</span>
        <span className="stroke-text">من هم </span>
        <span>ماذا قلوا عنا </span>
        <motion.span
          key={selectd}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >{testimonialsData[selectd].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selectd].name}
          </span>{" "}
          - {testimonialsData[selectd].status}
        </span>
      </div>
      <div className="right-t">
      <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selectd}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selectd].image}
          alt=""
        />
        <img src={testimonialsData[selectd].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selectd === 0
                ? setselectd(tLength - 1)
                : setselectd((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          ></img>
          <img
            onClick={() => {
              selectd === tLength - 1
                ? setselectd(0)
                : setselectd((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
