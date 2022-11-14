import styles from "./styles/signUpButtons.module.scss";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import usePostSignUp from "../../hooks/query/usePostSignUp";
import {setEnterState} from "../../redux/modules/userSlice";
import {useAppDispatch, useAppSelector} from "../../redux/store";

const SignUpButtons = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const id = useAppSelector((state) => state.userSlice.idState);
    const pwd = useAppSelector((state) => state.userSlice.firstPwdState);
    const name = useAppSelector((state) => state.userSlice.nameState);
    const answer = useAppSelector((state) => state.userSlice.answerState);
    const isEnter = useAppSelector((state) => state.userSlice.enterState);
    const query = usePostSignUp(id, pwd, name, answer);

    useEffect(() => {
        if (isEnter) {
            query.mutate();
            dispatch(setEnterState(false));
        }
    }, [isEnter]);

    return (
        <div className={styles.buttons}>
            <button
                className="size285 purple bold"
                onClick={() => query.mutate()}
            >
                회원가입
            </button>
            <button
                className="size285 gray bold"
                onClick={() => navigate('/log-in')}
            >로그인 페이지로 돌아가기
            </button>
        </div>
    );
};

export default SignUpButtons;
