import styles from "./styles/userButtons.module.scss";

const UserButtons = () => {
  return (
    <>
      <button className="purple bold">로그아웃</button>
      <p className={styles.withdrawal}>회원 탈퇴</p>
    </>
  );
};

export default UserButtons;
