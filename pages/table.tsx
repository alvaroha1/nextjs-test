import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const TablePage: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {<p>Table Page</p>}
      </main>

      <footer className={styles.footer}>{ <p>footer</p> }</footer>
    </div>
  );
};

export default TablePage;

