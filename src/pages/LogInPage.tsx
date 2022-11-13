import React from "react";
import styles from "./styles/logInPage.module.scss";
import LogoTitle from "../components/common/LogoTitle";
import LogInForm from "../components/logInPage/LogInForm";
import LogInButtons from "../components/logInPage/LogInButtons";

const LogInPage = () => {
    return (
        <div className={styles.container}>
            <LogoTitle title={"실시간 일대일 오목 게임, 오목캣"}/>
            <LogInForm/>
            <LogInButtons/>
        </div>
    );
};

export default LogInPage;