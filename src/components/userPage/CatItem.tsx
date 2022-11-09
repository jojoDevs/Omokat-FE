import React from "react";
import questionMark from "../../assets/icons/question_mark.svg";
import styles from "./styles/catItem.module.scss";

const CatItem = () => {
  return <img src={questionMark} className={styles.cat}></img>;
};

export default CatItem;
