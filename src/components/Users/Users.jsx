import React, { useEffect, useState } from "react";
import User from "../User/User";
import styles from "./Users.module.scss";
import { auth, db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

export default function Users({ setShowUsers, chats }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      let foundUsers = [];
      querySnapshot.forEach((doc) => {
        foundUsers.push(doc.data());
      });
      setUsers(foundUsers);
    };
    getUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) => user.name !== auth.currentUser.displayName
  );
  // console.log(filteredUsers);
  const searchResults = filteredUsers.filter((user) => {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <>
      <div className={styles.Search}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.Input}
          type="text"
          placeholder="Search users"
        />
      </div>
      <div style={{ overflowY: "scroll", height: "79vh" }}>
        {searchResults.map((user, i) => (
          <User
            chats={chats}
            setShowUsers={setShowUsers}
            key={user.uid}
            user={user}
          />
        ))}
      </div>
    </>
  );
}
