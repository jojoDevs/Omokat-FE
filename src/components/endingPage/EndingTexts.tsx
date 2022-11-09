import React from "react";
import styles from "./styles/endingTexts.module.scss";

const EndingTexts = ({ isWin }: { isWin: boolean }) => {
  let texts = isWin ? "이겼습니다!" : "히잉.. 졌습니다";
  return (
    <div className={styles.textWrapper}>
      <p className={styles.endingTitle}>{texts}</p>
      <p>현재 승률 98% (98/100)</p>
    </div>
  );
};

export default EndingTexts;
