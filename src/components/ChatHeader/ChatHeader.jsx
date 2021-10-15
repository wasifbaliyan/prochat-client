import React, { useEffect, useState } from "react";
import styles from "./ChatHeader.module.scss";
import { MdSearch, MdMoreVert } from "react-icons/md";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { auth, db } from "../../firebase";

export default function ChatHeader() {
  const { id } = useParams();
  const [chat, setChat] = useState({});
  useEffect(() => {
    const getChat = async () => {
      const docRef = doc(db, "chats", id);
      const docSnap = await getDoc(docRef);
      setChat(docSnap.data());
    };
    getChat();
  }, [id]);

  function chatWith() {
    if (chat && chat.members && chat.members.length !== 0) {
      return auth.currentUser.email === chat.members[0].email
        ? chat.members[1].email
        : chat.members[0].email;
    }
  }

  return (
    <nav className={styles.Header}>
      <div className={styles.Brand}>
        <img src="/favicon.png" alt="profile" />
        <h4>{chatWith()}</h4>
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
