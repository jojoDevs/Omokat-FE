import styles from "./styles/header.module.scss";
import { useNavigate } from "react-router-dom";
import logoBlack from "../../assets/logo/logo_black.svg";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  let storagePic = sessionStorage.getItem("pic");
  const profile = storagePic
    ? storagePic
    : `${process.env.REACT_APP_S3_URL}default_profile.svg`;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <img
          className={styles.headerLogo}
          src={logoBlack}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <p className={styles.headerText}>
          귀여운 고양이들과 함께 하는 오목 한 판!
        </p>
        <img
          className={styles.headerProfile}
          src={profile}
          alt="profile"
          onClick={() => navigate("/user")}
        />
      </div>
    </div>
  );
};

export default Header;
