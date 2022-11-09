import React from "react";
import styles from "./styles/userPage.module.scss";
import UserProfile from "../components/userPage/UserProfile";
import CatGrid from "../components/userPage/CatGrid";

const UserPage = () => {
  return (
    <div className={styles.userContainer}>
      <p className={styles.userTitles}>나의 프로필</p>
      <UserProfile />
      <p className={styles.userTitles}>
        나의 오목캣 컬렉션 <span>(1/10)</span>
      </p>
      <CatGrid />
    </div>
  );
};

export default UserPage;
