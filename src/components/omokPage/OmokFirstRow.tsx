import React from 'react';
import {OmokPieceLTCorner, OmokPieceRTCorner, OmokPieceT} from "./OmokPieces";

const OmokFirstRow = () => {
    return (
        <div style={{display: "flex"}}>
            <OmokPieceLTCorner/>
            {[...Array(9)].map(() => {
                return <OmokPieceT/>
            })}
            <OmokPieceRTCorner/>
        </div>
    );
};

export default OmokFirstRow;