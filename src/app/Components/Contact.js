"use client";
import React, { useRef } from "react";
import styles from "../../styles/contact.module.css";
import emailjs from "emailjs-com";

function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [msg, setMsg] = useState("");

  const form = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    // try {
    //   await emailjs.send(
    //     "","",
    //   )
    // } catch (e) {
    //   alert("Cannot send try again later !!");
    // }
    console.log(form.current);
  };

  return (
    <div>
      <div
        style={{
          marginTop: "5rem",
          marginBottom: "2rem",
        }}
      >
        <h5 className={styles.head1}>
          GET IN <label className={styles.label}>TOUCH</label>
        </h5>
        <h2 className={styles.head2}>
          Let’s Talk For your
          <label className={styles.label}> Next Projects</label>
        </h2>
      </div>
      <form ref={form} onSubmit={sendMessage} className={styles.contactMain}>
        <div className={styles.inputMain}>
          <label className={styles.textLabel}>Your Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Type Here..."
            required
            name="user_name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputMain}>
          <label className={styles.textLabel}>Your Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="emailexample@gmail.com"
            required
            name="user_email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputMain}>
          <label className={styles.textLabel}>Your Message</label>
          <textarea
            className={styles.textarea}
            type="text"
            placeholder="Type Here..."
            rows={5}
            required
            name="user_msg"
            // value={msg}
            // onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.downBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
