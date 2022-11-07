import React from "react";
import styles from "./styles/signUpButtons.module.scss"

const SignUpButtons = () => {
    return (
        <div className={styles.buttons}>
            <button className="size285 purple bold">회원가입</button>
            <button className="size285 gray bold">로그인 페이지로 돌아가기</button>
        </div>
    )
}

export default SignUpButtons