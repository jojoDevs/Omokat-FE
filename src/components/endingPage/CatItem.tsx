import React from "react";
import calico from "../../assets/cats/ending/calico.svg";
import styles from "./styles/endingItem.module.scss";

const EndingItem = () => {
  return <img src={calico} alt="cat" className={styles.item}></img>;
};

export default EndingItem;
