import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../components/common/Background";
import styles from "./styles/endingPage.module.scss";

const EndingPage = () => {
  return (
    <div className={styles.endingContainer}>
      <div className={styles.contentsWrapper}>
        <Outlet />
      </div>
      <Background />
    </div>
  );
};

export default EndingPage;
