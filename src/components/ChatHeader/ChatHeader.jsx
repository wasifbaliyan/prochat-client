import React, { useEffect, useState } from "react";
import styles from "./ChatHeader.module.scss";
import { MdSearch } from "react-icons/md";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { auth, db } from "../../firebase";

export default function ChatHeader({ setSearchQuery }) {
  const { id } = useParams();
  const [chat, setChat] = useState({});
  const [showSearch, setShowSearch] = useState(false);
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
      return auth.currentUser.displayName === chat.members[0].name
        ? chat.members[1].name
        : chat.members[0].name;
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
          <div className={styles.ItemBox}>
            {showSearch && (
              <input
                style={{ marginRight: "1rem" }}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.Input}
                type="text"
                placeholder="Search messages in chat"
              />
            )}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className={styles.Button}
            >
              <MdSearch size={25} color="#ccc" />
            </button>
          </div>
        </li>
        {/* <li className={styles.Item}>
          <button className={styles.Button}>
            <MdMoreVert size={25} color="#ccc" />
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
