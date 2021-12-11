import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const TimerPage: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {<p>Timer Page</p>}
      </main>

      <footer className={styles.footer}>{ <p>footer</p> }</footer>
    </div>
  );
};

export default TimerPage;

