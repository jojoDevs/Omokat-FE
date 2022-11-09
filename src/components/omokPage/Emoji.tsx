import React from "react";
import styles from "./styles/emoji.module.scss"

const Emoji = () => {
    return (
        <div className={styles.emojiWrapper}>
            <p>😄</p>
            <p>👋</p>
            <p>👍</p>
            <p>😓</p>
        </div>
    );
};

export default Emoji;