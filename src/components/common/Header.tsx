import React from "react";
import styles from "./styles/header.module.scss";
import logoBlack from "../../assets/logo/logo_black.svg";
import profile from "../../assets/icons/default_profile.svg";


const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                <img className={styles.headerLogo} src={logoBlack} alt="logo"/>
                <p className={styles.headerText}>귀여운 고양이들과 함께 하는 오목 한 판!</p>
                <img className={styles.headerProfile} src={profile} alt="profile"/>
            </div>
        </div>
    );
};

export default Header;
