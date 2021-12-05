import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import { collection, getDocs } from "firebase/firestore";
import styles from "./ChatDetails.module.scss";
import { auth, db } from "../../firebase";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import Message from "../../components/Message/Message";
import { addDoc, Timestamp } from "firebase/firestore";
import { MdSend } from "react-icons/md";

export default function ChatDetails() {
  const scroll = useRef();
  const [searchQuery, setSearchQuery] = useState("");

  const [chatDetails, setChatDetails] = useState([]);
  const { id } = useParams();
  const [text, setText] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, `chats/${id}/messages`), {
        text,
        from: auth.currentUser.displayName,
        createdAt: Timestamp.fromDate(new Date()),
      });
      setText("");
      scroll.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };
  useEffect(() => {
    const getChatDetails = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, `chats/${id}/messages`), orderBy("createdAt"))
      );
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setChatDetails(messages);
      scroll.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    };
    getChatDetails();
    const unsub = onSnapshot(collection(db, `chats/${id}/messages`), (doc) => {
      if (doc.size) {
        getChatDetails();
      }
    });

    return () => {
      unsub();
    };
  }, [id]);
  function filteredMessages() {
    return chatDetails.filter((message) =>
      message.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className={styles.ChatDetails}>
      <ChatHeader setSearchQuery={setSearchQuery} chatDetails={chatDetails} />
      <div style={{ position: "relative" }} className={styles.Messages}>
        {filteredMessages().map((msg) => (
          <Message
            key={msg.id}
            message={msg}
            side={auth.currentUser.displayName === msg.from ? "right" : "left"}
          />
        ))}
        <div ref={scroll}></div>
      </div>
      <form onSubmit={handleSend} className={styles.Form}>
        <input
          onChange={(e) => setText(e.target.value)}
          required
          className={styles.Input}
          type="text"
          placeholder="Type a message"
          value={text}
        />
        <button className={styles.Button}>
          <MdSend size={28} color="#777" />
        </button>
      </form>
    </div>
  );
}
