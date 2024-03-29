import React, { useState, useEffect } from "react";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { animate, motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

import "./Work.scss";
import { BsFileWordFill } from "react-icons/bs";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My
        <span> Portfolio </span>
        Projects
      </h2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ opacity: [1, 0.9], scale: [1, 1.3] }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ opacity: [1, 0.9], scale: [1, 1.3] }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="vold-text"> {work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {" "}
                {work.description}
              </p>
              <div
                className="app__work-tag app__flex"
                style={{ position: "unset" }}
              >
                <p className="p-text">[{work.tags[0]}]</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
