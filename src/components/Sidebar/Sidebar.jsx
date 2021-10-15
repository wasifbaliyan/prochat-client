import React, { useState } from "react";
import Chats from "../Chats/Chats";
import Header from "../Header/Header";
import Users from "../Users/Users";
import styles from "./Sidebar.module.scss";
export default function Sidebar() {
  const [showUsers, setShowUsers] = useState(false);
  return (
    <aside className={styles.Sidebar}>
      <Header setShowUsers={setShowUsers} showUsers={showUsers} />
      <div className={styles.Search}>
        <input
          className={styles.Input}
          type="text"
          placeholder="Search users/rooms"
        />
      </div>
      <div>
        {showUsers && <Users />}
        {!showUsers && <Chats />}
      </div>
    </aside>
  );
}
