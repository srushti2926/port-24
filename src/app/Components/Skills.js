import React from "react";
import styles from "../../styles/skills.module.css";
import { DiJavascript } from "react-icons/di";
import { FaPython, FaReact, FaFigma, FaJava } from "react-icons/fa6";
import { SiMysql, SiCanva, SiMongodb, SiPowerbi } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { DiBootstrap } from "react-icons/di";

function Skills() {
  const skills = [
    {
      logo: (
        <DiJavascript
          style={{
            fontSize: "3rem",
            color: "yellow",
          }}
        />
      ),
      name: "Javascript",
    },
    {
      logo: (
        <FaPython
          style={{
            fontSize: "3rem",
          }}
        />
      ),
      name: "Python",
    },
    {
      logo: (
        <FaReact
          style={{
            fontSize: "3rem",
            color: "#0390fc",
          }}
        />
      ),
      name: "React JS",
    },
    {
      logo: (
        <FaFigma
          style={{
            fontSize: "3rem",
          }}
        />
      ),
      name: "Figma",
    },
    {
      logo: (
        <FaJava
          style={{
            fontSize: "3rem",
          }}
        />
      ),
      name: "Java",
    },
    {
      logo: (
        <SiMysql
          style={{
            fontSize: "3rem",
          }}
        />
      ),
      name: "SQL",
    },
    {
      logo: (
        <SiCanva
          style={{
            fontSize: "3rem",
            color: "white",
          }}
        />
      ),
      name: "Canva",
    },
    {
      logo: (
        <SiMongodb
          style={{
            fontSize: "3rem",
            color: "green",
          }}
        />
      ),
      name: "MongoDB",
    },
    {
      logo: (
        <FaNodeJs
          style={{
            fontSize: "3rem",
            color: "green",
          }}
        />
      ),
      name: "NodeJS",
    },
    {
      logo: (
        <LuBrainCircuit
          style={{
            fontSize: "3rem",
            color: "purple",
          }}
        />
      ),
      name: "Machine Learing",
    },
    {
      logo: (
        <SiPowerbi
          style={{
            fontSize: "3rem",
          }}
        />
      ),
      name: "PowerBI",
    },
    {
      logo: (
        <DiBootstrap
          style={{
            fontSize: "3rem",
            color: "purple",
          }}
        />
      ),
      name: "Bootstrap",
    },
  ];

  return (
    <div>
      <h4 className={styles.head1}>
        MY <label className={styles.label}>TALENT</label>
      </h4>
      <h2 className={styles.head2}>Professional Skills</h2>
      <div className={styles.skillCards}>
        {skills.map((item) => (
          <SkillCards key={item.name} logo={item.logo} name={item.name} />
        ))}
      </div>
    </div>
  );
}

const SkillCards = ({ logo, name }) => {
  return (
    <>
      <div className={styles.skillCardMain}>
        {logo}
        <h3>{name}</h3>
      </div>
    </>
  );
};

export default Skills;
