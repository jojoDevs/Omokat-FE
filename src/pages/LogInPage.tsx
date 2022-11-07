import React from 'react';
import styles from "./styles/logInPage.module.scss"
import logo from "../assets/logo/logo.svg"
import LogInForm from "../components/logInPage/LogInForm";
import LogInButtons from "../components/logInPage/LogInButtons";

const LogInPage = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <p className={styles.title}>귀여운 고양이들과 함께 하는 오목 한 판!</p>
            <LogInForm/>
            <LogInButtons/>
        </div>
    )
}

export default LogInPage