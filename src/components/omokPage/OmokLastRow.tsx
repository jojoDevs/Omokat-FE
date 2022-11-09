import React from 'react';
import {OmokPieceB, OmokPieceLBCorner, OmokPieceRBCorner} from "./OmokPieces";

const OmokLastRow = () => {
    return (
        <div style={{display: "flex"}}>
            <OmokPieceLBCorner/>
            {[...Array(9)].map(() => {
                return <OmokPieceB/>
            })}
            <OmokPieceRBCorner/>
        </div>
    );
};

export default OmokLastRow;