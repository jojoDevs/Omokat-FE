import { useMutation, useQueryClient } from "react-query";
import { putUserPic } from "../../shared/routes/apis";

const usePutUserPic = (pic: string) => {
  const queryClinet = useQueryClient();
  return useMutation(() => putUserPic(pic), {
    onSuccess: () => queryClinet.invalidateQueries("user"),
  });
};

export default usePutUserPic;
