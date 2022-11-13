import React from "react";
import styles from "./styles/footer.module.scss";
import logoGray from "../../assets/logo/logo_gray.svg";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p>아이템이 팡팡 터지는 실시간 1:1 오목 게임</p>
            <img src={logoGray} alt="logo"/>
            <a href="https://github.com/jojoDevs">프로젝트 깃허브로 바로가기</a>
        </div>
    );
};

export default Footer;
