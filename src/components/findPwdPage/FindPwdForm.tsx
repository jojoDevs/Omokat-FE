import React from "react";
import styles from "./styles/findPwdForm.module.scss";
import { Input285 } from "../common/Inputs";

const FindPwdForm = () => {
  return (
    <div className={styles.inputWrapper}>
      <Input285 placeholder={"닉네임"} />
      <p className={styles.question}>가장 친한 고양이 이름은?</p>
      <Input285 placeholder={"비밀번호 찾기 답변"} />
    </div>
  );
};

export default FindPwdForm;
