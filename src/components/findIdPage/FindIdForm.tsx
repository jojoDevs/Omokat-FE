import React from "react";
import styles from "./styles/findIdForm.module.scss";
import { Input285 } from "../common/Inputs";

const FindIdForm = () => {
  return (
    <div className={styles.findInput}>
      <Input285 placeholder={"닉네임"} />
    </div>
  );
};

export default FindIdForm;
