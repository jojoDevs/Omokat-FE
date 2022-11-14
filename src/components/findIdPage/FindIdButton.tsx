import styles from "./styles/findIdButton.module.scss";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import usePostFindIdQuery from "../../hooks/query/usePostFindId";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setEnterState} from "../../redux/modules/userSlice";


const FindIdButton = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const name = useAppSelector(state => state.userSlice.nameState);
    const isEnter = useAppSelector(state => state.userSlice.enterState);

    const query = usePostFindIdQuery(name);

    useEffect(() => {
        if (isEnter) {
            query.mutate();
            dispatch(setEnterState(false));
        }
    }, [isEnter]);

    return (
        <div className={styles.findButton}>
            <button className={"size285 purple bold"} onClick={() => query.mutate()}>확인</button>
            {
                query.data &&
                <p className={styles.response}>
                    회원님의 아이디는 <span className={styles.id}>{query.data.data.id}</span> 입니다.
                </p>
            }
            <div className={styles.textButtons}>
                <span onClick={() => navigate('/log-in')}>로그인하기</span>
                <span onClick={() => navigate('/find-pwd')}>비밀번호 찾기</span>
            </div>
        </div>
    );
};

export default FindIdButton;
