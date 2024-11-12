import styles from "../styles/nav.module.css";

import Main from "./Components/Main";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div>
      <nav>
        <h2 className={styles.head}>
          <label className={styles.label}>S</label>
          rushti <label className={styles.label}>J</label>agtap
        </h2>
      </nav>
      <main>
        <Main />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
