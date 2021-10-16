import React from "react";
import styles from "./Home.module.scss";
import { MdChat } from "react-icons/md";

export default function Home() {
  return (
    <div className={styles.Home}>
      <div>
        <h3>
          Please click on the <MdChat /> icon to start chatting with your
          friends
        </h3>
        <h4 style={{ margin: ".8rem 0" }}>Happy prochatting ✌</h4>
        <span> - Wasif Baliyan</span>
      </div>
    </div>
  );
}
