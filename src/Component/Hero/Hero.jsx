import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import { alartx, art } from "../alartx.js";
import Number from 'number-counter'

const Hero = () => {
  const transition = { type: "steing", duration: 3 };

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/*  the bast ad   */}
        <div className="the-best-ad">
          <motion.div
            initial={{ right: "238px" }}
            whileInView={{ right: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>{" "}
          <span>أفضل نادي للياقة البدنية في المدينة</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">شكل </span>
            <span>قوي</span>
            <span> جسم مثالي</span>
          </div>
          <div></div>
          <div>
            <span>
              نعلم أن تحقيق أهدافك ليس دائمًا سهلاً. لكننا ملتزمون بمساعدتك في
              النجاح.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
          <span><Number end={140} start={100} delay='4' preFix="+"></Number> </span>
            <span>مدربو اللياقة </span>
          </div>
          <div>
          <span><Number end={950} start={500} delay='4' preFix="+"></Number> </span>
            <span>الأعضاء المنضمون </span>
          </div>
          <div>
          <span><Number end={50} start={20} delay='4' preFix="+"></Number> </span>
            <span>برامج اللياقة البدنية </span>
          </div>
        </div>
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button onClick={art} className="btn">
            {" "}
            البدء
          </button>
          <button onClick={alartx} className="btn">
            {" "}
            معرفة المزيد
          </button>
        </div>
      </div>
      <div className="right-h">
        <button onClick={art} className="btn">
          انضم الان{" "}
        </button>

        <motion.div
          initial={{ left: "-1rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span> ضربات القلب</span>
          <span>116 دقة</span>
        </motion.div>
        {/* hero images */}

        <img src={hero_image} alt="" className="hero-image" />

        <motion.img
          initial={{ left: "12rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ left: "40rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>سعرات حرارية محروقة </span>
            <span> 220سعرة</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
