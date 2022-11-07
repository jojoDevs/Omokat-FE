import React from "react";
import styles from "./styles/findPwdButton.module.scss";

const FindPwdButton = () => {
  return (
    <div className={styles.findButton}>
      <button className={"size285 purple bold"}>확인</button>
      <p className={styles.response}>
        회원님의 비밀번호는 <span className={styles.pwd}>omokwang01</span>
        입니다.
      </p>
      <div className={styles.textButtons}>
        <span>로그인하기</span>
        <span>아이디 찾기</span>
      </div>
    </div>
  );
};

export default FindPwdButton;
