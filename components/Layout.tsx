import React from "react";
import Link from "next/link";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link href={`/`}>
          <a>
            <span>Home</span>
          </a>
        </Link>
        <Link href={`/rickandmorty`}>
          <a>
            <span>Rick and Morty</span>
          </a>
        </Link>
        <Link href={`/table`}>
          <a>
            <span>Table</span>
          </a>
        </Link>
        <Link href={`/ticktacktoe`}>
          <a>
            <span>Ticktacktoe</span>
          </a>
        </Link>
        <Link href={`/timer`}>
          <a>
            <span>Timer</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
