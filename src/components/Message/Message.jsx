import React from "react";
import styles from "./Message.module.scss";
export default function Message({ side, message }) {
  return (
    <div
      className={styles.Parent}
      style={
        side === "left"
          ? { justifyContent: "flex-start" }
          : { justifyContent: "flex-end" }
      }
    >
      <div className={styles.Message}>
        <h5>{message.from}</h5>
        <p>{message.text}</p>
        <div>
          <span>11:52</span>
        </div>
      </div>
    </div>
  );
}
