import React, { Component } from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plan.css";
import { alartx } from "../alartx";
export default function Plan() {
  return (
    <div className="plans-container">
        <div className=" blur plans-blur-1"></div>
        <div className=" blur plans-blur-2"></div>

      <div className="programs-header">
        <span className="stroke-text">جاهز للبدء</span>
        <span>ابداء رحلتك </span>
        <span className="stroke-text">كن الان معنا</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}

            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img alt="" src={whiteTick} />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>رؤية المزيد عن الخطة -></span>
            </div>
            <button onClick={alartx} className="btn">
              انضم الينا الان{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
