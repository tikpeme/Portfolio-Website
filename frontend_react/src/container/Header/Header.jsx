import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { images } from "../../constants";
import "./Header.scss";

/*const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};*/

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text" style={{ textTransform: "upperCase" }}>
                {" "}
                Hello, I am
              </p>
              <h1 className="head-text">Tete Ikpeme</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text"> Welcome to my Page </p>
            <span>😁</span>
          </div>

          <div className="tag-cmp app__flex" style={{ marginBottom: "20px" }}>
            <p
              className="p-text"
              style={{ textAlign: "left", textTransform: "none" }}
            >
              Highly motivated Self-taught front-end React web developer, with a
              background in mechanical design engineering in the automotive
              industry. Seeking to fully transition into a career in web
              development.
              <br />
              With my proven ability to learn quickly, solve complex problems,
              and work collaboratively I am excited to leverage my transferable
              skills, and showcase my web development expertise to contribute to
              a dynamic and passionate team and workspace.
              <br />I am looking to enter a postion where i can leverage my
              skills, and continue to grow, and explore my interests, as i
              transition into this new exciting career field!!!
              <br />
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.Profile_1} alt="profile_bp" />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
