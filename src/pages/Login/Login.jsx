import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./Login.module.scss";
export default function Login() {
  const [register, setRegister] = useState(false);
  return (
    <div className={styles.Login}>
      <div className={styles.TopBox}></div>
      <div className={styles.FormBox}>
        {!register && <LoginForm setRegister={setRegister} />}
        {register && <RegisterForm setRegister={setRegister} />}
      </div>
    </div>
  );
}
