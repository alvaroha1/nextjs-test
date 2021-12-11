import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const FormPage: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {<p>Form Page</p>}
      </main>

      <footer className={styles.footer}>{ <p>footer</p> }</footer>
    </div>
  );
};

export default FormPage;

