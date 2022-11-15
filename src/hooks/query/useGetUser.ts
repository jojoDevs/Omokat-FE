import { useQuery } from "react-query";
import { getUser } from "../../shared/routes/apis";

const useGetUser = () => {
  return useQuery(["user"], () => getUser());
};

export default useGetUser;
