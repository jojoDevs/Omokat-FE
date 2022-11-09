import React, { useState } from "react";
import closeBox from "../../assets/icons/box.svg";
import openBox from "../../assets/icons/box_open.svg";
import styles from "./styles/closedBox.module.scss";

const ClosedBox = () => {
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false);

  return (
    <div className={styles.boxContainer} onClick={() => setIsBoxOpen(true)}>
      {isBoxOpen ? (
        <img src={openBox} alt="box" className={styles.box} />
      ) : (
        <>
          <p>👇</p>
          <img src={closeBox} alt="box" className={styles.box} />
        </>
      )}
    </div>
  );
};

export default ClosedBox;
