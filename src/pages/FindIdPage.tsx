import React from "react";
import styles from "./styles/findIdPage.module.scss";
import LogoTitle from "../components/common/LogoTitle";
import FindIdForm from "../components/findIdPage/FindIdForm";
import FindIdButton from "../components/findIdPage/FindIdButton";
import useScroll from "../hooks/useScroll";

const FindIdPage = () => {
    useScroll();

    return (
        <div className={styles.container}>
            <LogoTitle title={"회원 아이디 찾기"}/>
            <FindIdForm/>
            <FindIdButton/>
        </div>
    );
};

export default FindIdPage;
