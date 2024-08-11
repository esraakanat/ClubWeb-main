import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Programs from "../Programs/Programs";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vty6jvi",
        "template_uhgvalh",
        form.current,
        "LHx0r-rywA_gNhQQs"
      )
      .then(
        (result) => {
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className="custom-ui">
   
                  <div className="the-best-ad">
                    <div></div>
                    <span>أفضل نادي للياقة البدنية في المدينة</span>
                  </div>
                  <h1>نحن سعداء جدًا لسماع رغبتكم في الانضمام إلى نادينا؟</h1>
                  <p>نحن نتطلع إلى رؤيتكم في نادينا قريبًا! </p>
                </div>
              );
            },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text"> انقل نفسك</span>
          <span> الى اعلى </span>
        </div>
        <div>
          <span>لبنا جسمك</span>
          <span className="stroke-text"> تواصل معنا?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            required
            name="user_email"
            placeholder="اكتب عنوان بريدك الكتروني هنا   ..."
          />
          <button className="btn btn-j">ارسال البريد</button>
        </form>
      </div>
    </div>
  );
};
export default Join;
