import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import Plan from "./Plans/Plan";
import Programsmore from "./Programs/Programsmore";
import Reasonsmore from "./Reasons/Reasonsmore";

export const alartx = () => {
  return confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <div className="alert-manu">
            <div className="rigth-ra">
              <Programsmore />{" "}
            </div>
            <div className="left-ra" dir="rtl">
              <Reasonsmore />
            </div>
          </div>
          <form
            className="email-container"
            dir="rtl"
            style={{ backgroundColor: "#3c3f45", justifyContent: "center" }}
          >
            <input
              type="email"
              required
              name="user_email"
              placeholder="اكتب عنوان بريدك الكتروني هنا   ..."
            />
            <input
              type="email"
              required
              name="user_email"
              placeholder="اكتب   اسمك  هنا   ..."
            />
            <input
              type="email"
              required
              name="user_email"
              placeholder="اكتب عنوانك  هنا   ..."
            />
            <input
              type="email"
              required
              name="user_email"
              placeholder="اكتب رقم هاتفك  هنا   ..."
            />
            <button className="btn btn-j">ارسال </button>
          </form>
        </div>
      );
    },
  });
};

export const art = () => {
  return confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <div className="blur-a"></div>
          <div className="blur-a1"></div>
          <div className="alert-manu">
            <div className="rigth-a">
              <Plan />{" "}
            </div>
            <div className="left-a" dir="rtl">
              <div className="the-best-ad">
                <div></div>
                <span>أفضل نادي للياقة البدنية في المدينة</span>
              </div>
              <h1>نحن سعداء جدًا لسماع رغبتكم في الانضمام إلى نادينا؟</h1>
              <p>نحن نتطلع إلى رؤيتكم في نادينا قريبًا! </p>
            </div>
          </div>
        </div>
      );
    },
  });
};
