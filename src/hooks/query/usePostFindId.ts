import {useMutation} from "react-query";
import {postFindId} from "../../shared/routes/apis";

const usePostFindId = (name: string) => {
    return useMutation(() => postFindId(name));
};

export default usePostFindId;