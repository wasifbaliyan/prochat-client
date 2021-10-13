import React from "react";
import Message from "../Message/Message";
import styles from "./Messages.module.scss";
export default function Messages() {
  return (
    <div className={styles.Messages}>
      {[1, 2, 3, 4, 5, 5, 4, 4, 4, 4].map((msg, i) => (
        <Message key={i} message={msg} side={i % 2 === 0 ? "left" : "right"} />
      ))}
    </div>
  );
}
