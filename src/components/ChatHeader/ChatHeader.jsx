import React from "react";
import styles from "./ChatHeader.module.scss";
import { MdSearch, MdMoreVert } from "react-icons/md";

export default function ChatHeader() {
  return (
    <nav className={styles.Header}>
      <div className={styles.Brand}>
        <img src="/favicon.png" alt="profile" />
        <h4>Wasif Baliyan</h4>
      </div>
      <ul className={styles.List}>
        <li className={styles.Item}>
          <button className={styles.Button}>
            <MdSearch size={25} color="#ccc" />
          </button>
        </li>
        <li className={styles.Item}>
          <button className={styles.Button}>
            <MdMoreVert size={25} color="#ccc" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
