import React from "react";
import styles from "./styles/signUpPage.module.scss";
import SignUpButtons from "../components/signUpPage/SignUpButtons";
import SignUpForm from "../components/signUpPage/SignUpForm";
import LogoTitle from "../components/common/LogoTitle";

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <LogoTitle title="지금 가입하고 냐옹냐옹~" />
      <SignUpForm />
      <SignUpButtons />
    </div>
  );
};

export default SignUpPage;
