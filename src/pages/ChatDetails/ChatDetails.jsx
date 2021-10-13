import React from "react";
import ChatForm from "../../components/ChatForm/ChatForm";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import Messages from "../../components/Messages/Messages";
import styles from "./ChatDetails.module.scss";
export default function ChatDetails() {
  return (
    <div className={styles.ChatDetails}>
      <ChatHeader />
      <Messages />
      <ChatForm />
    </div>
  );
}
