import React from 'react';
import styles from "./styles/bubbles.module.scss"
import myBubble from "../../assets/icons/my_bubble.svg";
import yourBubble from "../../assets/icons/your_bubble.svg";


const Bubbles = () => {
    return (
        <div>
            <img src={myBubble} alt="chat bubble" className={styles.chat}/>
            <img src={yourBubble} alt="chat bubble" className={styles.chat}/>
        </div>
    );
};

export default Bubbles;