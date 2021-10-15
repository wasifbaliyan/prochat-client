import React, { useEffect, useState } from "react";
import Chat from "../Chat/Chat";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
export default function Chats() {
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
  }, []);
  return (
    <div style={{ overflowY: "scroll", height: "79vh" }}>
      {chats.map((chat, i) => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </div>
  );
}
