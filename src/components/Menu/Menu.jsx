import React from "react";
import styles from "./Menu.module.scss";
export default function Menu() {
  return (
    <div className={styles.Menu}>
      <ul className={styles.List}>
        <li className={styles.Item}>New group</li>
        <li className={styles.Item}>Logout</li>
      </ul>
    </div>
  );
}
