import React from "react";

import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

import tick from "../../assets/tick.png";

const Reasonsmore = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="right-r">
        <span>الاسباب التي تدفعك لاختيارن </span>
   
        <div className="details-r " style={{ color: "black"}}>
          <div >
            <img src={tick} alt="" />
            <span>أكثر من 140+ مدربًا خبيرًا</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>تدريب أكثر ذكاءً وأسرع من ذي قبل</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> برنامج مجاني للعضو الجديد</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>شركاء موثوقون</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          شركاؤنا
        </span>
        <div className="partners">
          <img alt="" src={nb} />
          <img alt="" src={adidas} />
          <img alt="" src={nike} />
        </div>
      </div>
    </div>
  );
};
export default Reasonsmore;
