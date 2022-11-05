import React from 'react';
import s from "./styles/logInPage.module.scss"
import logo from "../assets/logo/logo.svg"
import LogInForm from "../components/logInPage/LogInForm";
import LogInButtons from "../components/logInPage/LogInButtons";

const LogInPage = () => {
    return (
        <div className={s.container}>
            <img src={logo} alt="logo" className={s.logo}/>
            <p className={s.title}>귀여운 고양이들과 함께 하는 오목 한 판!</p>
            <LogInForm/>
            <LogInButtons/>
        </div>
    )
}

export default LogInPage