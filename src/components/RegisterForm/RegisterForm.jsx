import React, { useState } from "react";
import styles from "./RegisterForm.module.scss";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
export default function RegisterForm({ setRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser);
      await addDoc(collection(db, "users"), {
        name: displayName,
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
      });
    } catch (error) {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };

  return (
    <div className={styles.FormContainer}>
      <div>
        <div className={styles.Image}>
          <img src="/favicon.png" alt="logo" />
        </div>
        <h3>Create a new account</h3>
        <form onSubmit={handleRegister} className={styles.Form}>
          <div>
            <input
              onChange={(e) => setDisplayName(e.target.value)}
              type="text"
              placeholder="Full name"
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button>Register</button>
        </form>
        <div className={styles.Link}>
          <button onClick={() => setRegister(false)}>
            Already registered? <span>Login here</span>
          </button>
        </div>
      </div>
    </div>
  );
}
