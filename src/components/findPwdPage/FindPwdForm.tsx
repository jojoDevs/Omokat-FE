import React, {useState} from "react";
import styles from "./styles/findPwdForm.module.scss";
import {Input285} from "../common/Inputs";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setAnswerState, setIdState, setPwdState} from "../../redux/modules/userSlice";

const FindPwdForm = () => {
    const dispatch = useAppDispatch();
    const isReset = useAppSelector(state => state.userSlice.resetState);
    const [isPwdValid, setIsPwdValid] = useState<boolean>(true);

    const checkPassword = (pwd: string) => {
        const pwdRegExp =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        setIsPwdValid(pwdRegExp.test(pwd));
        dispatch(setPwdState(pwd));
    }

    return (
        <div className={styles.inputWrapper}>
            <Input285 placeholder={"아이디"} onChange={e => dispatch(setIdState(e.target.value))} disabled={isReset}/>
            <p>가장 친한 고양이 이름은?</p>
            <Input285 placeholder={"비밀번호 찾기 답변"}
                      onChange={e => dispatch(setAnswerState(e.target.value))} disabled={isReset}/>
            {
                isReset && <Input285 type={'password'} placeholder={"비밀번호 재설정"}
                                     onChange={e => checkPassword(e.target.value)}/>
            }
            {
                !isPwdValid && <p className={styles.warning}>비밀번호 형식을 확인해주세요.</p>
            }
        </div>
    );
};

export default FindPwdForm;
