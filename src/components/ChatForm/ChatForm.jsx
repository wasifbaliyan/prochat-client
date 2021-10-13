import React from "react";
import styles from "./ChatForm.module.scss";
import { MdSend } from "react-icons/md";
export default function ChatForm() {
  return (
    <div className={styles.Form}>
      <input
        className={styles.Input}
        type="text"
        placeholder="Type a message"
      />
      <button className={styles.Button}>
        <MdSend size={28} color="#777" />
      </button>
    </div>
  );
}
