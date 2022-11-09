import React from 'react';
import styles from "./styles/timer.module.scss"

const Timer = () => {
    return (
        <div className={styles.timeCircle}>
            <p className={styles.timeLeft}>남은 시간</p>
            <p className={styles.seconds}>3</p>
        </div>
    );
};

export default Timer;