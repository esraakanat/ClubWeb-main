import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";

export default function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, SetMenuOpened] = useState(false);

  return (
    <div className="header">
      <img alt="" src={Logo} className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: " var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img onClick={()=>SetMenuOpened(true)}
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={()=>SetMenuOpened(false)} >الرئسية </li>
          <li onClick={()=>SetMenuOpened(false)}>البرامج</li>
          <li onClick={()=>SetMenuOpened(false)}> من نحن</li>
          <li onClick={()=>SetMenuOpened(false)}> الخطط </li>
          <li onClick={()=>SetMenuOpened(false)}>القوالب</li>
        </ul>
      )}
    </div>
  );
}











