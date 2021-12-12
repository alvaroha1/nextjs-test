import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import SortableTable from "../components/SortableTable"

const TablePage: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {<p>Table Page</p>}
        <SortableTable />
      </main>

      <footer className={styles.footer}>{ <p>footer</p> }</footer>
    </div>
  );
};

export default TablePage;

