import React from "react";
import Card from "../card/card";
import styles from "./cardpreview.module.css";

const CardPreview = ({ cards }) => (
  <section className={styles.CardPreview}>
    <h1 className={styles.title}>CardPreview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} />
      ))}
    </ul>
  </section>
);

export default CardPreview;
