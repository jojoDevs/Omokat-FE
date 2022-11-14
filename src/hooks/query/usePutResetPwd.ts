import {useMutation} from "react-query";
import {putResetPwd} from "../../shared/routes/apis";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const usePutResetPwd = (id: string, password: string) => {
    const navigate = useNavigate();

    return useMutation(() => putResetPwd(id, password), {
        onSuccess: (() => {
            toast.success("비밀번호가 변경되었어요.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(() => navigate('/log-in'), 2000);
        })
    })
};

export default usePutResetPwd;