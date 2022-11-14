import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {postLogIn} from "../../shared/routes/apis";

const usePostLogIn = (
    id: string,
    password: string,
) => {
    const navigate = useNavigate();
    return useMutation(() => postLogIn(id, password), {
        onSuccess: (data) => {
            sessionStorage.setItem('token', data.data.token)
            sessionStorage.setItem('pic', data.data.pic)
            navigate("/");
        },
    });
};

export default usePostLogIn;
