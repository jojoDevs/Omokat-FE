import React from "react";
import styles from "./styles/findIdButton.module.scss";

const FindIdButton = () => {
  return (
    <div className={styles.findButton}>
      <button className={"size285 purple bold"}>확인</button>
      <p className={styles.response}>
        회원님의 아이디는 <span className={styles.id}>omokwang</span> 입니다.
      </p>
      <div className={styles.textButtons}>
        <span>로그인하기</span>
        <span>비밀번호 찾기</span>
      </div>
    </div>
  );
};

export default FindIdButton;
