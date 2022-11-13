import { createSlice } from "@reduxjs/toolkit";
import { UserSliceType } from "../../types/userType";

const initialState: UserSliceType = {
  idState: "",
  firstPwdState: "",
  secondPwdState: "",
  nameState: "",
  answerState: "",
  enterState: false,
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
    setNameState: (state, action) => {
      state.nameState = action.payload;
    },
    setAnswerState: (state, action) => {
      state.answerState = action.payload;
    },
    setEnterState: (state, action) => {
      state.enterState = action.payload;
    },
  },
});

export const {
  setIdState,
  setFirstPwdState,
  setSecondPwdState,
  setNameState,
  setAnswerState,
  setEnterState,
} = userSlice.actions;
export default userSlice.reducer;
