import React from "react";
import styles from "./styles/logInForm.module.scss";
import {Input285} from "../common/Inputs";

const LogInForm = () => {
    return (
        <>
            <div className={styles.inputWrapper}>
                <Input285 placeholder="아이디"/>
                <Input285 placeholder="비밀번호" type="password"/>
            </div>
            <p className={styles.register}>아직 회원이 아니라면? <span>회원가입하기</span></p>
        </>
    )
}
export default LogInForm