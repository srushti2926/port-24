import React from "react";
import ServiceCard from "./Sub-Components/ServiceCard";

import { PiFigmaLogoFill } from "react-icons/pi";
import { IoGlobeSharp } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";
import styles from "../../styles/services.module.css";

function Services() {
  const skills = [
    {
      logo: (
        <IoGlobeSharp
          style={{
            fontSize: "3rem",
            color: "#f7054b",
          }}
        />
      ),
      skill: "Web Development",
      desc: "Modern and mobile-ready website that will help you reach all of your marketing .",
    },
    {
      logo: (
        <PiFigmaLogoFill
          style={{
            fontSize: "3rem",
            color: "#f7054b",
          }}
        />
      ),
      skill: "UI/UX DESIGN",
      desc: "Create intuitive interface and delightful user experiences by blending aesthetics with usability.",
    },
    {
      logo: (
        <IoPhonePortraitSharp
          style={{
            fontSize: "3rem",
            color: "#f7054b",
          }}
        />
      ),
      skill: "App Development",
      desc: "Modern and mobile-ready application that will help you reach all your marketing",
    },
  ];

  return (
    <div>
      <div
        style={{
          marginTop: "5rem",
        }}
      >
        <h5 className={styles.head1}>I LIKE TO MAKE THINGS EASY AND FUN</h5>
        <h2 className={styles.head2}>
          My <label className={styles.label}>Special Services</label> For Your{" "}
          <br />
          Bussiness <label className={styles.label}>Development</label>
        </h2>
      </div>
      <div className={styles.cardRow}>
        {skills.map((item) => (
          <ServiceCard
            key={item.skill}
            logo={item.logo}
            skill={item.skill}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
