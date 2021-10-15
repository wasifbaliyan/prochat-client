import React, { useEffect, useState } from "react";
import User from "../User/User";

import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

export default function Users() {
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
  return (
    <div style={{ overflowY: "scroll", height: "79vh" }}>
      {users.map((user, i) => (
        <User key={user.uid} user={user} />
      ))}
    </div>
  );
}
