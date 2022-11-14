import {useNavigate} from "react-router-dom";
import styles from "./styles/findPwdButton.module.scss";
import usePostFindPwd from "../../hooks/query/usePostFindPwd";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import usePutResetPwd from "../../hooks/query/usePutResetPwd";
import {useEffect} from "react";
import {setEnterState} from "../../redux/modules/userSlice";


const FindPwdButton = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const id = useAppSelector(state => state.userSlice.idState);
    const answer = useAppSelector(state => state.userSlice.answerState);
    const pwd = useAppSelector(state => state.userSlice.pwdState);
    const isReset = useAppSelector(state => state.userSlice.resetState);
    const isEnter = useAppSelector(state => state.userSlice.enterState);

    const postQuery = usePostFindPwd(id, answer);
    const putQuery = usePutResetPwd(id, pwd);

    useEffect(() => {
        if (isEnter && !isReset) {
            postQuery.mutate();
            dispatch(setEnterState(false));
        } else if (isEnter && isReset) {
            putQuery.mutate();
            dispatch(setEnterState(false));
        }
    }, [isEnter, isReset]);

    return (
        <div className={styles.findButton}>
            {
                isReset ?
                    <button className={"size285 purple bold"} onClick={() => putQuery.mutate()}>재설정</button> :
                    <button className={"size285 purple bold"} onClick={() => postQuery.mutate()}>확인</button>
            }
            <div className={styles.textButtons}>
                <span onClick={() => navigate('/log-in')}>로그인하기</span>
                <span onClick={() => navigate('/find-id')}>아이디 찾기</span>
            </div>
        </div>
    );
};

export default FindPwdButton;
