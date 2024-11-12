import React from "react";
import styles from "../../styles/projects.module.css";
import Image from "next/image";
import PGI from "../../../public/Screenshot 2024-11-12 160232.png";
import SDKSK from "../../../public/Screenshot 2024-11-12 160304.png";
import TTG from "../../../public/Screenshot 2024-11-12 160401.png";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";

function Projects() {
  return (
    <div>
      <div
        style={{
          marginTop: "5rem",
          marginBottom: "2rem",
        }}
      >
        <h5 className={styles.head1}>LATEST WORKS</h5>
        <h2 className={styles.head2}>
          Explore My Popular <label className={styles.label}>Projects</label>
        </h2>
      </div>
      <div>
        <div className={styles.cardMain}>
          <div className={styles.cardLeft}>
            <div className={styles.image}>
              <Image
                src={PGI}
                width={500}
                height={300}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className={styles.cardRight}>
            <h5 className={styles.head3}>
              <label className={styles.label}>Website</label>
            </h5>
            <h1 className={styles.head4}>Pune Gas Industries</h1>
            <p
              style={{
                width: "90%",
                marginTop: "5%",
                lineHeight: 2.5,
              }}
            >
              punegasindustries is a website for gas industries which is located
              in Pune. It features a React-based interface for displaying the
              information of this industries regarding which gases they provide.
              It has functionality of contactus and feedback
            </p>
            <div className={styles.arrow}>
              <Link
                href={"https://punegasindustries.in"}
                style={{
                  all: "unset",
                }}
                target="_blank"
              >
                <MdDoubleArrow
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.cardMain}>
          <div className={styles.card2Right}>
            <h5 className={styles.head3}>
              <label className={styles.label}>Website</label>
            </h5>
            <h1 className={styles.head4}>Shree Datta Krushi Kendra</h1>
            <p
              style={{
                width: "90%",
                marginTop: "5%",
                lineHeight: 2.5,
              }}
            >
              It is a website for fertilizers and pesticides shop which is
              located in Phaltan. It features a React-based interface for
              displaying the information of products regarding which they
              provide. It has functionality of contactus and feedback
            </p>
            <div className={styles.arrow}>
              <Link
                href={"https://shridattakrushisevakendra.in/"}
                style={{
                  all: "unset",
                }}
                target="_blank"
              >
                <MdDoubleArrow
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className={styles.cardLeft}>
            <div className={styles.image}>
              <Image
                src={SDKSK}
                width={500}
                height={300}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className={styles.cardMain}>
          <div className={styles.cardLeft}>
            <div className={styles.image}>
              <Image
                src={TTG}
                width={500}
                height={300}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className={styles.cardRight}>
            <h5 className={styles.head3}>
              <label className={styles.label}>Web App</label>
            </h5>
            <h1 className={styles.head4}>Time Table Generator</h1>
            <p
              style={{
                width: "90%",
                marginTop: "5%",
                lineHeight: 2.5,
              }}
            >
              The Time Table Generator is a web app for schools and colleges to
              create and manage academic timetables effortlessly. It features a
              React-based interface for intuitive scheduling and integrates
              Express.js and MongoDB for backend functionality, including
              timetable storage and complaint management. The app streamlines
              timetable creation, offering users efficient tools for publication
              and feedback.
            </p>
            <div className={styles.arrow}>
              <Link
                href={
                  "https://www.youtube.com/watch?v=M8cJd6KYoQ8&feature=youtu.be"
                }
                style={{
                  all: "unset",
                }}
                target="_blank"
              >
                <MdDoubleArrow
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
