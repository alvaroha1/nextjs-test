import React from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";
interface Route {
  name: string;
  path: string;
}

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const routes: Route[] = [{name: "Home", path: "/"}, {name: "Rick and Morty", path: "/rickandmorty"}, {name: "Table", path: "/table"}, {name: "Ticktacktoe", path: "/ticktacktoe"}, {name: "Timer", path: "/timer"}]
  return (
    <div className={styles.container}>
      <nav>
        {routes.map(route => {
          return (<Link href={route.path} key={route.path}>
            {router.route === route.path ? <span className={styles.item__selected}>{route.name}</span> : <span className={styles.item}>{route.name}</span>}
          </Link>)
        })}
      </nav>
      {children}
    </div>
  );
}

export default Layout;
