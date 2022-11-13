import React from 'react';
import styles from "./styles/background.module.scss";
import bg from "../../assets/icons/bg.svg";

const Background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.bgShadow}/>
            <div className={styles.bgCatsWrapper}>
                <img src={bg} alt="background" className={styles.bgCats}/>
            </div>
        </div>
    );
};

export default Background;