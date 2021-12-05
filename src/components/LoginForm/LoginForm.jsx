import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginForm({ setRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };

  const loginAsGuest = async (e) => {
    try {
      setEmail("tomato@mail.com");
      setPassword("tomato");
      await signInWithEmailAndPassword(auth, "tomato@mail.com", "tomato");
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
        <h3>Login to your account</h3>
        <form onSubmit={handleLogin} className={styles.Form}>
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
              password.trimStart().length === 0
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
              password.trimStart().length === 0
            }
          >
            Login
          </button>
          <button className={styles.Guest} onClick={loginAsGuest}>
            Login as guest
          </button>
        </form>

        <div className={styles.Link}>
          <button onClick={() => setRegister(true)}>
            Don't have an account? <span>Create one</span>
          </button>
        </div>
      </div>
    </div>
  );
}
