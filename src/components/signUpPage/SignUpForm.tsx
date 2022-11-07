import React from "react";
import styles from "./styles/signUpForm.module.scss"
import { Input285 } from "../common/Inputs";

const SignUpForm = () => {
    return (
        <div>
            <div className={styles.inputs}>
                <Input285 placeholder="아이디 (5자 ~ 12자)"/>
                <Input285 placeholder="비밀번호 (8자 ~ 20자 / 영문, 숫자, 특수기호 필수)" type="password"/>
                <Input285 placeholder="비밀번호 확인" type="password"/>
                <Input285 placeholder="닉네임 (2자 ~ 6자)"/>
            </div>
            <div className={styles.questions}>
                <p className={styles.size12}>가장 친한 고양이 이름은?</p>
                <p className={styles.size10}>비밀번호 분실 시, 비밀번호를 찾기 위한 질문입니다.</p>
            </div>
            <div className={styles.inputs}>
                <Input285 placeholder="비밀번호 찾기 답변 (20자 이내)"/>
            </div>
        </div>
    )
}

export default SignUpForm