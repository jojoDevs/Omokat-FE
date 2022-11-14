import styles from "./styles/findIdForm.module.scss";
import {Input285} from "../common/Inputs";
import {useAppDispatch} from "../../redux/store";
import {setNameState} from "../../redux/modules/userSlice";

const FindIdForm = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.findInput}>
            <Input285 placeholder={"닉네임"} onChange={(e) => dispatch(setNameState(e.target.value))}/>
        </div>
    );
};

export default FindIdForm;
