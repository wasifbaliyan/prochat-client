import React from "react";
import styles from "./Chat.module.scss";
export default function Chat() {
  return (
    <div className={styles.Chat}>
      <div className={styles.Profile}>
        <img src="/favicon.png" alt="profile" />
      </div>
      <div className={styles.Info}>
        <div className={styles.Section}>
          <h5>Todos</h5>
          <p>10/10/21</p>
        </div>
        <div className={styles.Last}>
          <p>Hi, How are you?</p>
        </div>
      </div>
    </div>
  );
}
