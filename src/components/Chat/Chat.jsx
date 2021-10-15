import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Chat.module.scss";

export default function Chat({ chat }) {
  return (
    <NavLink
      activeStyle={{ backgroundColor: "#2d3134", display: "block" }}
      to={`/chats/${chat.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.Chat}>
        <div className={styles.Profile}>
          <img src="/favicon.png" alt="profile" />
        </div>
        <div className={styles.Info}>
          <div className={styles.Section}>
            <h5>{`${chat.members[0].email}, ${chat.members[1].email} chat`}</h5>
            <p>10/10/21</p>
          </div>
          <div className={styles.Last}>
            <p>Click here to chat...</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
