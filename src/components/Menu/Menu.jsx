import React from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import styles from "./Menu.module.scss";

export default function Menu({ setShowUsers, setShowMenu }) {
  const history = useHistory();
  return (
    <div className={styles.Menu}>
      <ul className={styles.List}>
        <li
          onClick={() => {
            setShowUsers(true);
            setShowMenu(false);
          }}
          className={styles.Item}
        >
          New chat
        </li>
        <li
          onClick={() => {
            auth.signOut();
            history.replace("/");
          }}
          className={styles.Item}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
