import React, { useState } from "react";
import styles from "./Header.module.scss";
import { MdChat, MdMoreVert, MdKeyboardBackspace } from "react-icons/md";
import Menu from "../Menu/Menu";

export default function Header({ setShowUsers, showUsers }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={styles.Header}>
      {!showUsers && (
        <div className={styles.Brand}>
          <img src="/favicon.png" alt="profile" />
        </div>
      )}
      {showUsers && (
        <div style={{ height: "50px" }} className={styles.Brand}>
          <button className={styles.Button} onClick={() => setShowUsers(false)}>
            <MdKeyboardBackspace size={25} color="#ccc" />
          </button>
        </div>
      )}
      <ul className={styles.List}>
        <li className={styles.Item}>
          <button
            onClick={() => setShowUsers(!showUsers)}
            className={styles.Button}
          >
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
          {showMenu && (
            <Menu setShowUsers={setShowUsers} setShowMenu={setShowMenu} />
          )}
        </li>
      </ul>
    </nav>
  );
}
