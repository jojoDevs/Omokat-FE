import React from "react";
import styles from "./styles/chooseBox.module.scss";
import ClosedBox from "./ClosedBox";

const ChooseBox = () => {
  return (
    <>
      <p className={styles.text}>~ 아이템 박스를 하나 골라 보세요 ~</p>
      <div className={styles.boxes}>
        <ClosedBox />
        <ClosedBox />
        <ClosedBox />
      </div>
    </>
  );
};

export default ChooseBox;
