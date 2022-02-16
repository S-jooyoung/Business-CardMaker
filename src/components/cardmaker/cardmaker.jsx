import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardmaker.module.css";

const CardMaker = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.CardMaker}>
    <h1 className={styles.title}>CardMaker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default CardMaker;
