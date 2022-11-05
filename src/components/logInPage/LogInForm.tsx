import React from "react";
import s from "./styles/logInForm.module.scss";
import {Input285} from "../common/Inputs";

const LogInForm = () => {
    return (
        <>
            <div className={s.inputWrapper}>
                <Input285 placeholder="아이디"/>
                <Input285 placeholder="비밀번호" type="password"/>
            </div>
            <p className={s.register}>아직 회원이 아니라면? <span>회원가입하기</span></p>
        </>
    )
}
export default LogInForm