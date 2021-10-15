import React from "react";
import styles from "./User.module.scss";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useHistory } from "react-router";
export default function User({ user, setShowUsers }) {
  const history = useHistory();
  const handleAddChat = async () => {
    try {
      const res = await addDoc(collection(db, "chats"), {
        members: [
          {
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            name: auth.currentUser.displayName,
          },
          { email: user.email, uid: user.uid, name: user.name },
        ],
      });
      history.replace(`/chats/${res.id}`);
      setShowUsers(false);
    } catch (error) {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };
  return (
    <div onClick={handleAddChat} className={styles.User}>
      <div className={styles.Profile}>
        <img src="/favicon.png" alt="profile" />
      </div>
      <div className={styles.Info}>
        <div className={styles.Section}>
          <h5>{user.name}</h5>
        </div>
        <div className={styles.Last}>
          <p>{user.status}</p>
        </div>
      </div>
    </div>
  );
}
