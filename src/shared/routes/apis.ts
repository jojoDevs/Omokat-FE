import axiosInstance from "./instance";

// 회원가입
export const postSignUp = (
  id: string,
  password: string,
  name: string,
  answer: string
) =>
  axiosInstance.post(`/signup`, {
    id: id,
    password: password,
    name: name,
    answer: answer,
  });

// 로그인
export const postLogIn = (id: string, password: string) =>
  axiosInstance.post(`/login`, { id: id, password: password });

// 아이디 찾기
export const postFindId = (name: string) =>
  axiosInstance.post(`/find-id`, { name: name });

// 비밀번호 찾기
export const postFindPwd = (id: string, answer: string) =>
  axiosInstance.post(`/find-pwd`, { id: id, answer: answer });

// 비밀번호 재설정
export const putResetPwd = (id: string, password: string) =>
  axiosInstance.put(`/reset-pwd`, { id: id, password: password });

// 유저 정보 조회
export const getUser = () => axiosInstance.get(`/user`);

// 유저 프로필 이미지 수정
export const putUserPic = (pic: string) =>
  axiosInstance.put(`/user`, { pic: pic });
