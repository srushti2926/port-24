import React from "react";
import Link from "next/link";
import styles from "../../styles/main.module.css";
import Image from "next/image";
import Profile from "../../../public/profile.png";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <h4
          style={{
            fontSize: ".8rem",
          }}
        >
          HELLO, I'M
        </h4>
        <h1
          style={{
            fontSize: "4rem",
          }}
        >
          <label
            style={{
              color: "#f7054b",
            }}
          >
            Srushti
          </label>{" "}
          Jagtap
        </h1>
        <h2
          style={{
            color: "#f7054b",
            fontSize: "2rem",
          }}
        >
          Software Engineer
        </h2>

        <p className={styles.para}>
          Passionate software engineer dedicated to crafting robust solutions
          and driving project success through collaboration and continuous
          learning. Skilled in strategic project management and team leadership.
          Seeking a challenging analytical and developer role to leverage
          technical expertise and drive engineering excellence.
        </p>
        <div className={styles.btnSec}>
          <Link
            style={{
              all: "unset",
            }}
            download={true}
            href="/Resume.pdf"
          >
            <button className={styles.downBtn}> Download Resume</button>
          </Link>
          <Link
            style={{
              all: "unset",
            }}
            href={"mailto:srushtijagtap0429@gmail.com"}
          >
            <button className={styles.contactBtn}>Contact Me</button>
          </Link>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.circle}>
          <img
            style={{
              borderRadius: "200px",
            }}
            src="/profile.png"
            alt="Profile"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
