import React from "react";
import profile from "../../assets/icons/default_profile.svg";
import styles from "./styles/userProfile.module.scss";

const UserProfile = () => {
  return (
    <div className={styles.profileBox}>
      <img src={profile} className={styles.profileImg} />
      <div className={styles.profileTexts}>
        <p className={styles.userName}>username11</p>
        <p>97% (97/100)</p>
        <p>가입일 2022-11-02</p>
      </div>
      <p className={styles.modify}>수정</p>
    </div>
  );
};

export default UserProfile;
