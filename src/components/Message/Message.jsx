import React from "react";
import styles from "./Message.module.scss";
export default function Message({ side, message }) {
  const time = message.createdAt.toDate().toLocaleTimeString("en-IN");
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
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
