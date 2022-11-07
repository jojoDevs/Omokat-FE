import React from 'react';
import styles from "./styles/logInPage.module.scss"
import logo from "../assets/logo/logo.svg"
import LogInForm from "../components/logInPage/LogInForm";
import LogInButtons from "../components/logInPage/LogInButtons";

const LogInPage = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <p className={styles.title}>실시간 일대일 오목 게임, 오목캣</p>
            <LogInForm/>
            <LogInButtons/>
        </div>
    )
}

export default LogInPage