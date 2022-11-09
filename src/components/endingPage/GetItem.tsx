import React from "react";
import CatItem from "./CatItem";
import EndingButtons from "./EndingButton";
import EndingTexts from "./EndingTexts";
import styles from "./styles/getItem.module.scss";

const GetItem = () => {
  return (
    <div className={styles.itemWrapper}>
      <EndingTexts isWin={true} />
      <p className={styles.text}>~ 짜잔 삼색냥이가 찾아왔어요 ~</p>
      <CatItem />
      <EndingButtons />
    </div>
  );
};

export default GetItem;
