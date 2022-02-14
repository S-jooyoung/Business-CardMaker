import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardMaker from "../cardmaker/cardmaker";
import CardPreview from "../cardpreview/cardpreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "jooyoung",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "jooyoung.dev@gmail.com",
      message: "go for it",
      fileName: "jooyoung",
      fileURL: null,
    },
    {
      id: "2",
      name: "jooyoung",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "jooyoung.dev@gmail.com",
      message: "go for it",
      fileName: "jooyoung",
      fileURL: "joyoung.png",
    },
    {
      id: "3",
      name: "jooyoung",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "jooyoung.dev@gmail.com",
      message: "go for it",
      fileName: "jooyoung",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.Card}>
        <CardMaker cards={cards} addCard={addCard} />
        <CardPreview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
