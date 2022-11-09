import React from "react";
import styles from "./styles/mainButtons.module.scss";

const MainButtons = () => {
    return (
        <div className={styles.buttonWrapper}>
            <div className={styles.purpleButtons}>
                <button className="size90 purple">방 만들기</button>
                <button className="size90 purple">빠른 시작</button>
            </div>
            <p className={styles.waiting}>대기 중인 방만 보기</p>
        </div>
    );
};

export default MainButtons;
