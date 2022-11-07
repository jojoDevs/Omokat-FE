import React from "react";
import styles from "./styles/logInButtons.module.scss"
import kakao from "../../assets/icons/kakao.svg";


const LogInButtons = () => {
    return (
        <div className={styles.buttonWrapper}>
            <button className="size285 purple bold">로그인</button>
            <button className="size285 kakao bold">
                <img src={kakao} alt={kakao} className={styles.kakao}/>카카오 로그인
            </button>
            <div className={styles.findWrapper}>
                <span>아이디 찾기</span><span>비밀번호 찾기</span>
            </div>
        </div>
    )
}

export default LogInButtons