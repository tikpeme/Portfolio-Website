import React, { useState, useEffect } from "react";

import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

import "./Skills.scss";

import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <h2 className="head-text">Skills</h2>
      <div className="app__skill-container">
        <motion.div className="app__skill-list">
          {skills.map((skill) => (
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="app__skill-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex app__skill-item-icon"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text"> {skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
