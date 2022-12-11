import React from "react";
import { AppWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Contact
        <span> Me </span>
      </h2>
      Email : tete.ikpeme@gmail.com <br />
      Phone : +1 832-703-4047 <br />
      <div>
        {" "}
        Github :
        <a href="https://github.com/tikpeme" target="_blank" rel="noreferrer">
          {" "}
          https://github.com/tikpeme
        </a>{" "}
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/tete-ikpeme-19681146/"
          target="blank"
          rel="noreferrer"
        >
          {" "}
          LinkedIn{" "}
        </a>
      </div>
    </>
  );
};

export default AppWrap(Footer, "contact");
