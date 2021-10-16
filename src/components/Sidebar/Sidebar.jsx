import React, { useEffect, useState } from "react";
import Chats from "../Chats/Chats";
import Header from "../Header/Header";
import Users from "../Users/Users";
import styles from "./Sidebar.module.scss";
import { db } from "../../firebase";
import { collection, getDocs, onSnapshot } from "@firebase/firestore";

export default function Sidebar() {
  const [showUsers, setShowUsers] = useState(false);

  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = async () => {
      const querySnapshot = await getDocs(collection(db, "chats"));
      let foundUsers = [];
      querySnapshot.forEach((doc) => {
        foundUsers.push({ ...doc.data(), id: doc.id });
      });
      setChats(foundUsers);
    };
    getChats();
    const unsub = onSnapshot(collection(db, `chats`), (doc) => {
      if (doc.size) {
        getChats();
      }
    });

    return () => {
      unsub();
    };
  }, []);
  return (
    <aside className={styles.Sidebar}>
      <Header setShowUsers={setShowUsers} showUsers={showUsers} />
      <div>
        {showUsers && <Users chats={chats} setShowUsers={setShowUsers} />}
        {!showUsers && <Chats chats={chats} />}
      </div>
    </aside>
  );
}
