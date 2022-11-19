import React, { useState, useEffect } from "react";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { animate, motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

import "./Work.scss";

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
        <span>Portfolio Projects</span>
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
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;
