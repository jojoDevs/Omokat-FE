import { setEnterState } from "../../redux/modules/userSlice";
import { useAppDispatch } from "../../redux/store";

interface PropsType {
  type?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input285 = ({ type, placeholder, onChange }: PropsType) => {
  const dispatch = useAppDispatch();
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      className={"size285"}
      onChange={onChange}
      onKeyDown={(e) => e.key === "Enter" && dispatch(setEnterState(true))}
    />
  );
};
