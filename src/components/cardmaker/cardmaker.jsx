import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardmaker.module.css";

const CardMaker = ({ cards, addCard }) => (
  <section className={styles.CardMaker}>
    <h1 className={styles.title}>CardMaker</h1>
    {cards.map((card) => (
      <CardEditForm key={card.id} card={card} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default CardMaker;
