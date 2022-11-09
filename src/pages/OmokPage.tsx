import React from "react";
import styles from "./styles/omokPage.module.scss";
import Background from "../components/common/Background";
import Timer from "../components/omokPage/Timer";
import NameCard from "../components/omokPage/NameCard";
import Emoji from "../components/omokPage/Emoji";
import OmokBoard from "../components/omokPage/OmokBoard";

const OmokPage = () => {
    return (
        <div className={styles.omokContainer}>
            <div className={styles.gameWrapper}>
                <div className={styles.gameInfo}>
                    <Timer/>
                    <NameCard/>
                    <Emoji/>
                </div>
                <OmokBoard/>
            </div>
            <Background/>
        </div>

    );
};

export default OmokPage;
