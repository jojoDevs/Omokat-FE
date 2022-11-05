import React from "react";
import s from "./styles/logInButtons.module.scss"
import kakao from "../../assets/icons/kakao.svg";


const LogInButtons = () => {
    return (
        <div className={s.buttonWrapper}>
            <button className="size285 purple bold">로그인</button>
            <button className="size285 kakao bold">
                <img src={kakao} alt={kakao} className={s.kakao}/>카카오 로그인
            </button>
            <div className={s.findWrapper}>
                <span>아이디 찾기</span><span>비밀번호 찾기</span>
            </div>
        </div>
    )
}

export default LogInButtons