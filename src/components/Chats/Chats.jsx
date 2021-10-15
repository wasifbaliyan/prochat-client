import React, { useEffect, useState } from "react";
import Chat from "../Chat/Chat";
import { auth, db } from "../../firebase";
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
  const filteredChats = chats.filter((chat) => {
    return (
      chat.members[0].email === auth.currentUser.email ||
      chat.members[1].email === auth.currentUser.email
    );
  });
  return (
    <div style={{ overflowY: "scroll", height: "79vh" }}>
      {filteredChats.map((chat, i) => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </div>
  );
}
