import React from "react";
import { auth } from "../../firebase";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.Menu}>
      <ul className={styles.List}>
        <li className={styles.Item}>New group</li>
        <li onClick={() => auth.signOut()} className={styles.Item}>
          Logout
        </li>
      </ul>
    </div>
  );
}
