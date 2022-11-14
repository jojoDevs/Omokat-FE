import {createSlice} from "@reduxjs/toolkit";
import {UserSliceType} from "../../types/userType";

const initialState: UserSliceType = {
    idState: "",
    firstPwdState: "",
    secondPwdState: "",
    pwdState: "",
    nameState: "",
    answerState: "",
    enterState: false,
    resetState: false,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setIdState: (state, action) => {
            state.idState = action.payload;
        },
        setFirstPwdState: (state, action) => {
            state.firstPwdState = action.payload;
        },
        setSecondPwdState: (state, action) => {
            state.secondPwdState = action.payload;
        },
        setPwdState: (state, action) => {
            state.pwdState = action.payload;
        },
        setNameState: (state, action) => {
            state.nameState = action.payload;
        },
        setAnswerState: (state, action) => {
            state.answerState = action.payload;
        },
        setEnterState: (state, action) => {
            state.enterState = action.payload;
        },
        setResetState: (state, action) => {
            state.resetState = action.payload;
        }
    },
});

export const {
    setIdState,
    setFirstPwdState,
    setSecondPwdState,
    setPwdState,
    setNameState,
    setAnswerState,
    setEnterState,
    setResetState,
} = userSlice.actions;
export default userSlice.reducer;
