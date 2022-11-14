import React from "react";
import {setEnterState} from "../../redux/modules/userSlice";
import {useAppDispatch} from "../../redux/store";

interface PropsType {
    type?: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export const Input285 = ({type, placeholder, onChange, disabled}: PropsType) => {
    const dispatch = useAppDispatch();
    return (
        <input
            type={type ? type : "text"}
            placeholder={placeholder}
            className={"size285"}
            onChange={onChange}
            disabled={disabled}
            onKeyDown={(e) => e.key === "Enter" && dispatch(setEnterState(true))}
        />
    );
};
