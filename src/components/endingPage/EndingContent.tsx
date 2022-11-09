import React from "react";
import ChooseBox from "./ChooseBox";
import EndingButtons from "./EndingButton";
import EndingTexts from "./EndingTexts";

const EndingContent = ({ isWin }: { isWin: boolean }) => {
  return (
    <>
      <EndingTexts isWin={isWin} />
      {isWin ? <ChooseBox /> : <EndingButtons />}
    </>
  );
};

export default EndingContent;
