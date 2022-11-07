import React from "react";
import logo from '../assets/logo/logo.svg'
import styles from './styles/signUpPage.module.scss'
import SignUpButtons from '../components/signUpPage/SignUpButtons';
import SignUpForm from '../components/signUpPage/SignUpForm';

const SignUpPage = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <p className={styles.texts}>지금 가입하고 냐옹냐옹~</p>
            <SignUpForm/>
            <SignUpButtons/>
        </div>
    )
}

export default SignUpPage