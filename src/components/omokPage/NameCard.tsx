import React from 'react';
import styles from "./styles/nameCard.module.scss"
import profile from "../../assets/icons/default_profile.svg"
import Bubbles from "./Bubbles";

const NameCard = () => {
    return (
        <>
            <div className={styles.cardContainer}>
                <img src={profile} alt="profile" className={styles.profile}/>
                <div>
                    <p className={styles.user}>username11</p>
                    <p>97% (97/100)</p>
                    <p className={styles.stoneColor}>백돌</p>
                </div>
            </div>
            <Bubbles/>
            <div className={`${styles.cardContainer} ${styles.black}`}>
                <img src={profile} alt="profile" className={styles.profile}/>
                <div>
                    <p className={`${styles.user} ${styles.black}`}>username11</p>
                    <p className={styles.black}>97% (97/100)</p>
                    <p className={`${styles.stoneColor} ${styles.black}`}>흑돌</p>
                </div>
            </div>
        </>
    );
};

export default NameCard;