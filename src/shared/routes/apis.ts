import axiosInstance from "./instance";

// 회원가입
export const postSignUp = (id: string, password: string, name: string, answer: string) =>
    axiosInstance.post(`/signup`, {id: id, password: password, name: name, answer: answer});

// 로그인
export const postLogIn = (id: string, password: string) =>
    axiosInstance.post(`/login`, {id: id, password: password});