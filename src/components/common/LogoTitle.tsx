import React from "react";
import logo from "../../assets/logo/logo.svg";
import styles from "./styles/logoTitle.module.scss";

const LogoTitle = ({title}: { title: string }) => {
    return (
        <>
            <img src={logo} alt="logo" className={styles.logo}/>
            <p className={styles.title}>{title}</p>
        </>
    );
};

export default LogoTitle;
