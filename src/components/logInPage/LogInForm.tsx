import styles from "./styles/logInForm.module.scss";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Input285} from "../common/Inputs";
import {useAppDispatch} from "../../redux/store";
import {setIdState, setPwdState} from "../../redux/modules/userSlice";


const LogInForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <>
            <div className={styles.inputWrapper}>
                <Input285 placeholder="아이디" onChange={(e) => dispatch(setIdState(e.target.value))}/>
                <Input285 placeholder="비밀번호" type="password" onChange={(e) => dispatch(setPwdState(e.target.value))}/>
            </div>
            <p className={styles.register}>아직 회원이 아니라면?
                <span onClick={() => navigate('/sign-up')}>회원가입하기</span>
            </p>
        </>
    )
}
export default LogInForm