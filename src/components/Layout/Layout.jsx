import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <main className={styles.Main}>{children}</main>
    </div>
  );
}
