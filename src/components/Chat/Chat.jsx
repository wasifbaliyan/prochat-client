import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Chat.module.scss";
import { auth } from "../../firebase";

export default function Chat({ chat }) {
  const otherUser = () => {
    if (auth.currentUser.displayName === chat.members[0].name) {
      return chat.members[1].name;
    } else {
      return chat.members[0].name;
    }
  };
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
            <h5>{otherUser()}</h5>
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
