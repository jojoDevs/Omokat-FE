import React from "react";
import styles from "./styles/signUpForm.module.scss";
import { Input285 } from "../common/Inputs";

const SignUpForm = () => {
  return (
    <div>
      <div className={styles.inputs}>
        <Input285 placeholder="아이디 (5자 ~ 12자)" />
        <div className={styles.warning}>
          <p>아이디가 너무 길어요!</p>
        </div>
        <Input285
          placeholder="비밀번호 (8자 ~ 20자 / 영문, 숫자, 특수기호 필수)"
          type="password"
        />
        <div className={styles.warning}>
          <p>비밀번호에 특수기호는 반드시 포함되어야 해요!</p>
        </div>
        <Input285 placeholder="비밀번호 확인" type="password" />
        <div className={styles.warning}>
          <p>비밀번호가 일치하지 않아요!</p>
        </div>
        <Input285 placeholder="닉네임 (2자 ~ 6자)" />
        <div className={styles.warning}>
          <p>이미 사용중인 닉네임이에요!</p>
        </div>
      </div>
      <div className={styles.questions}>
        <p>가장 친한 고양이 이름은?</p>
        <p>비밀번호 분실 시, 비밀번호를 찾기 위한 질문입니다.</p>
      </div>
      <div className={styles.inputs}>
        <Input285 placeholder="비밀번호 찾기 답변 (20자 이내)" />
      </div>
    </div>
  );
};

export default SignUpForm;
