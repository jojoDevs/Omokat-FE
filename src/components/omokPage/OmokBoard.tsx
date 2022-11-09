import React from "react";
import OmokFirstRow from "./OmokFirstRow";
import OmokRow from "./OmokRow";
import OmokLastRow from "./OmokLastRow";

const OmokBoard = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <OmokFirstRow/>
            {[...Array(9)].map(() => {
                return <OmokRow/>
            })}
            <OmokLastRow/>
        </div>
    );
};

export default OmokBoard;
