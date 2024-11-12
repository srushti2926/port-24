import React from "react";
import styles from "../../../styles/services.module.css";

function ServiceCard({ logo, skill, desc }) {
  return (
    <div className={styles.cardMain}>
      {logo}
      <h3>{skill}</h3>
      <p
        style={{
          textAlign: "center",
          width: "90%",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default ServiceCard;
