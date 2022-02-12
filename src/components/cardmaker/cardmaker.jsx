import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardmaker.module.css";

const CardMaker = ({ cards }) => (
  <section className={styles.CardMaker}>
    <h1 className={styles.title}>CardMaker</h1>
    {cards.map((card) => (
      <CardEditForm key={card.id} card={card} />
    ))}
  </section>
);

export default CardMaker;
