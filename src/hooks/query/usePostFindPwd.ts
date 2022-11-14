import {useMutation} from "react-query";
import {postFindPwd} from "../../shared/routes/apis";
import {useAppDispatch} from "../../redux/store";
import {setResetState} from "../../redux/modules/userSlice";

const usePostFindPwd = (id: string, answer: string) => {
    const dispatch = useAppDispatch();

    return useMutation(() => postFindPwd(id, answer), {
        onSuccess: () => {
            dispatch(setResetState(true))
        }
    });
};

export default usePostFindPwd;