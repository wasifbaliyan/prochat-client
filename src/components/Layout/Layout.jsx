import React from "react";
import ChatDetails from "../../pages/ChatDetails/ChatDetails";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <main className={styles.Main}>
        <ChatDetails />
      </main>
    </div>
  );
}
