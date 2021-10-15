import React from "react";
import { auth } from "../../firebase";
import styles from "./Menu.module.scss";

export default function Menu({ setShowUsers, setShowMenu }) {
  return (
    <div className={styles.Menu}>
      <ul className={styles.List}>
        <li
          onClick={() => {
            setShowUsers(true);
            setShowMenu(false);
          }}
          className={styles.Item}
        >
          New chat
        </li>
        <li onClick={() => auth.signOut()} className={styles.Item}>
          Logout
        </li>
      </ul>
    </div>
  );
}
