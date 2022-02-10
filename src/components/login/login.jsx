import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  let navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate("/maker", { state: { id: userId } });
  };

  const OnLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.id);
      });
  });
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={OnLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={OnLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
