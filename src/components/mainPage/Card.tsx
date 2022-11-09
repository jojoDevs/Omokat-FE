import React from "react";
import styles from "./styles/card.module.scss";
import arrow from "../../assets/icons/arrow_right.svg";
import profile from "../../assets/icons/default_profile.svg";

const Card = () => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.layer}>
                <p className={styles.message}>
                    게임방
                    <br className={styles.hiddenBr}/>
                    <span>참가하기</span>
                </p>
                <img src={arrow} alt="arrow" className={styles.arrow}/>
            </div>
            {/*<div className={styles.layer}>*/}
            {/*    <p className={styles.message}>*/}
            {/*        아쉽게도*/}
            {/*        <br className={styles.hiddenBr}/>*/}
            {/*        <span>게임이 이미</span>*/}
            {/*        <br/>*/}
            {/*        시작됐어요!*/}
            {/*    </p>*/}
            {/*</div>*/}
            <p className={styles.status}>대기중</p>
            <img src={profile} alt="profile" className={styles.profile}/>
            <div>
                <p className={styles.username}>오목오목왕왕</p>
                <p>98% (98/100)</p>
            </div>

        </div>
    );
};

export default Card;
