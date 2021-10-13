import React from "react";
import Chat from "../Chat/Chat";

export default function Chats() {
  return (
    <div style={{ overflowY: "scroll", height: "79vh" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((chat, i) => (
        <Chat key={i} chat={chat} />
      ))}
    </div>
  );
}
