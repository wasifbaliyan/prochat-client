import React, { useState } from "react";
import Chat from "../Chat/Chat";
import { auth } from "../../firebase";
import styles from "./Chats.module.scss";

export default function Chats({ chats }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter((chat) => {
    return (
      chat.members[0].name === auth.currentUser.displayName ||
      chat.members[1].name === auth.currentUser.displayName
    );
  });
  const searchResults = filteredChats.filter((chat) => {
    return (
      chat.members[0].name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.members[1].name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <>
      <div className={styles.Search}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.Input}
          type="text"
          placeholder="Search users in chats"
        />
      </div>
      <div style={{ overflowY: "scroll", height: "79vh" }}>
        {searchResults.map((chat, i) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </div>
    </>
  );
}
