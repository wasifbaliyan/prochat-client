import React, { useState } from "react";
import styles from "./Header.module.scss";
import { MdChat, MdMoreVert } from "react-icons/md";
import Menu from "../Menu/Menu";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={styles.Header}>
      <div className={styles.Brand}>
        <img src="/favicon.png" alt="profile" />
      </div>
      <ul className={styles.List}>
        <li className={styles.Item}>
          <button className={styles.Button}>
            <MdChat size={25} color="#ccc" />
          </button>
        </li>
        <li className={styles.Item}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={styles.Button}
          >
            <MdMoreVert size={25} color="#ccc" />
          </button>
          {showMenu && <Menu />}
        </li>
      </ul>
    </nav>
  );
}
