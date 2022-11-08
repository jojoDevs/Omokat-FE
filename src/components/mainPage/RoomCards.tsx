import React from "react";
import styles from "./styles/roomCards.module.scss";
import Card from "./Card";
import more from "../../assets/icons/more.svg";

const RoomCards = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.cardGrid}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <img src={more} alt="more icon" />
    </div>
  );
};

export default RoomCards;
