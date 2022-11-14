import styles from "./styles/findPwdPage.module.scss";
import LogoTitle from "../components/common/LogoTitle";
import FindPwdForm from "../components/findPwdPage/FindPwdForm";
import FindPwdButton from "../components/findPwdPage/FindPwdButton";
import useScroll from "../hooks/useScroll";

const FindPwdPage = () => {
    useScroll();

    return (
        <div className={styles.container}>
            <LogoTitle title={"회원 비밀번호 찾기"}/>
            <FindPwdForm/>
            <FindPwdButton/>
        </div>
    );
};

export default FindPwdPage;
