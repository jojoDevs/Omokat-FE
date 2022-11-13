import React, { useState } from "react";
import styles from "./styles/signUpForm.module.scss";
import { Input285 } from "../common/Inputs";
import { useAppDispatch } from "../../redux/store";
import {
  setAnswerState,
  setFirstPwdState,
  setIdState,
  setNameState,
  setSecondPwdState,
} from "../../redux/modules/userSlice";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const [isIdValid, setIsIdValid] = useState<boolean>(true);
  const [isPwdValid, setIsPwdValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [isSamePwd, setIsSamePwd] = useState<boolean>(true);
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [isAnswerValid, setIsAnswerValid] = useState<boolean>(true);

  const checkId = (id: string) => {
    const idRegExp = /^[a-z0-9]{5,12}$/;
    setIsIdValid(idRegExp.test(id));
    dispatch(setIdState(id));
  };

  const checkFirstPwd = (pwd: string) => {
    const pwdRegExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    setIsPwdValid(pwdRegExp.test(pwd));
    setPassword(pwd);
    setIsSamePwd(pwd === secondPassword);
    dispatch(setFirstPwdState(pwd));
  };

  const checkSecondPwd = (secondPwd: string) => {
    setSecondPassword(secondPwd);
    setIsSamePwd(secondPwd === password);
    dispatch(setSecondPwdState(secondPwd));
  };

  const checkName = (name: string) => {
    const nameRegExp = /^[A-Za-z0-9가-힣]{2,6}$/;
    setIsNameValid(nameRegExp.test(name));
    dispatch(setNameState(name));
  };

  const checkAnswer = (answer: string) => {
    const answerRegExp = /^[A-Za-z0-9가-힣]{1,20}$/;
    setIsAnswerValid(answerRegExp.test(answer));
    dispatch(setAnswerState(answer));
  };

  return (
    <>
      <div className={styles.inputs}>
        <Input285
          placeholder="아이디 (5자 ~ 12자)"
          onChange={(e) => checkId(e.target.value)}
        />
        <div className={styles.warning}>
          {!isIdValid && <p>아이디 형식을 확인해주세요.</p>}
        </div>
        <Input285
          placeholder="비밀번호 (8자 ~ 20자 / 영문, 숫자, 특수기호 필수)"
          type="password"
          onChange={(e) => checkFirstPwd(e.target.value)}
        />
        <div className={styles.warning}>
          {!isPwdValid && <p>비밀번호 형식을 확인해주세요.</p>}
        </div>
        <Input285
          placeholder="비밀번호 확인"
          type="password"
          onChange={(e) => checkSecondPwd(e.target.value)}
        />
        <div className={styles.warning}>
          {!isSamePwd && <p>비밀번호가 일치하지 않아요.</p>}
        </div>
        <Input285
          placeholder="닉네임 (2자 ~ 6자)"
          onChange={(e) => checkName(e.target.value)}
        />
        <div className={styles.warning}>
          {!isNameValid && <p>닉네임 형식을 확인해주세요.</p>}
        </div>
      </div>
      <div className={styles.questions}>
        <p>
          가장 친한 고양이 이름은? <br />
          비밀번호 분실 시, 비밀번호를 찾기 위한 질문입니다.
        </p>
        <Input285
          placeholder="비밀번호 찾기 답변 (20자 이내)"
          onChange={(e) => checkAnswer(e.target.value)}
        />
        <div className={styles.answerWarning}>
          {!isAnswerValid && <p>답변 형식을 확인해주세요.</p>}
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
