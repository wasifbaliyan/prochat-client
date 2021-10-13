import React from "react";
import Chats from "../Chats/Chats";
import Header from "../Header/Header";
import styles from "./Sidebar.module.scss";
export default function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <Header />
      <div className={styles.Search}>
        <input
          className={styles.Input}
          type="text"
          placeholder="Search users/rooms"
        />
      </div>
      <div>
        <Chats />
      </div>
    </aside>
  );
}
