import React from "react";
import styles from "./Message.module.scss";
export default function Message({ side }) {
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
        <h5>Wasif Baliyan</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero
          vero non impedit. Adipisci, suscipit.
        </p>
        <div>
          <span>11:52</span>
        </div>
      </div>
    </div>
  );
}
