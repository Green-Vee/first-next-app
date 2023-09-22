"use client"

import { signIn } from "next-auth/react";
import Styles from "./page.module.css";

const Login = () => {
  return (
    <div className={Styles.container}>
      <button onClick={() => signIn("google")}>Sign In with Google</button>
    </div>
  );
};

export default Login;
