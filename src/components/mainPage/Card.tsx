import React from "react";
import styles from "./styles/card.module.scss";
import profile from "../../assets/icons/default_profile.svg";

const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.status}>대기중</p>
      <img src={profile} alt="profile" />
      <p className={styles.username}>오목오목왕왕</p>
      <p>98% (98/100)</p>
    </div>
  );
};

export default Card;
