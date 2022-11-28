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

  return (
    <>
      <h2 className="head-text">Skills & Experience </h2>
      <div className="app__skill-container">
        <motion.div className="app__skill-list">
          {skills.map((skill) => (
            <motion.div whileInView={{ opacity: [0, 1] }}></motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
