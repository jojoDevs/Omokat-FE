import React from 'react';
import {OmokPiece, OmokPieceL, OmokPieceR} from "./OmokPieces";

const OmokRow = () => {
    return (
        <div style={{display: "flex"}}>
            <OmokPieceL/>
            {[...Array(9)].map(() => {
                return <OmokPiece/>
            })}
            <OmokPieceR/>
        </div>
    );
};

export default OmokRow;