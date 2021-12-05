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
      await addDoc(collection(db, "users"), {
        name: displayName,
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        status: "Hey there, I'm using proChat!",
      });
      auth.currentUser.displayName = displayName;
    } catch (error) {
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
              value={displayName}
            />
          </div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              required
              value={email}
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              value={password}
            />
          </div>
          <button
            style={
              email.trimStart().length === 0 ||
              password.trimStart().length === 0 ||
              displayName.trimStart().length === 0
                ? {
                    cursor: "not-allowed",
                    backgroundColor: "#ccc",
                    color: "#555",
                    border: "1px solid #ccc",
                  }
                : {}
            }
            disabled={
              email.trimStart().length === 0 ||
              password.trimStart().length === 0 ||
              displayName.trimStart().length === 0
            }
          >
            Register
          </button>
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
