import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postSignUp } from "../../shared/routes/apis";

const usePostSignUp = (
  id: string,
  password: string,
  name: string,
  answer: string
) => {
  const navigate = useNavigate();
  return useMutation(() => postSignUp(id, password, name, answer), {
    onSuccess: (data) => {
      navigate("/log-in");
    },
  });
};

export default usePostSignUp;
