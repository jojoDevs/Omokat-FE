import styles from "./styles/logInButtons.module.scss"
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import kakao from "../../assets/icons/kakao.svg";
import usePostLogIn from "../../hooks/query/usePostLogIn";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setEnterState} from "../../redux/modules/userSlice";

const LogInButtons = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const id = useAppSelector(state => state.userSlice.idState);
    const pwd = useAppSelector(state => state.userSlice.pwdState);
    const isEnter = useAppSelector(state => state.userSlice.enterState);

    const query = usePostLogIn(id, pwd);

    useEffect(() => {
        if (isEnter) {
            query.mutate();
            dispatch(setEnterState(false));
        }
    }, [isEnter]);

    return (
        <div className={styles.buttonWrapper}>
            <button className="size285 purple bold" onClick={() => query.mutate()}>로그인</button>
            <button className="size285 kakao bold">
                <img src={kakao} alt={kakao} className={styles.kakao}/>카카오 로그인
            </button>
            <div className={styles.findWrapper}>
                <span onClick={() => navigate('/find-id')}>아이디 찾기</span>
                <span onClick={() => navigate('/find-pwd')}>비밀번호 찾기</span>
            </div>
        </div>
    )
}

export default LogInButtons