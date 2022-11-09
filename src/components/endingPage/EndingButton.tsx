import React from "react";
import styles from "./styles/endingButton.module.scss";

const EndingButtons = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button className="size285 purple bold">
        로비로 가서 새로운 게임 참여하기
      </button>
      <button className="size285 purple">마이페이지로 가기</button>
    </div>
  );
};

export default EndingButtons;
