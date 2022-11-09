import styles from "./styles/omokPieces.module.scss";

export const OmokPiece = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={`${styles.piece} ${styles.top}`}/>
            </div>
            <div className={styles.colWrapper}>
                <div className={`${styles.piece} ${styles.left}`}/>
                <div className={`${styles.piece} ${styles.left} ${styles.top}`}/>
            </div>
        </div>
    );
};

export const OmokPieceL = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={styles.piece}/>
            </div>
            <div className={styles.colWrapper}>
                <div className={`${styles.piece} ${styles.leftBold}`}/>
                <div className={`${styles.piece} ${styles.leftBold} ${styles.top}`}/>
            </div>
        </div>
    );
};

export const OmokPieceR = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={`${styles.piece} ${styles.rightBold}`}/>
                <div className={`${styles.piece} ${styles.top} ${styles.rightBold}`}/>
            </div>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={styles.piece}/>
            </div>
        </div>
    );
};

export const OmokPieceT = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={`${styles.piece} ${styles.topBold}`}/>
            </div>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={`${styles.piece} ${styles.left} ${styles.topBold}`}/>
            </div>
        </div>
    );
};

export const OmokPieceLTCorner = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={styles.piece}/>
            </div>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div
                    className={`${styles.piece} ${styles.topBold} ${styles.leftBold}`}
                />
            </div>
        </div>
    );
};

export const OmokPieceRTCorner = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div
                    className={`${styles.piece} ${styles.topBold} ${styles.rightBold}`}
                />
            </div>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={styles.piece}/>
            </div>
        </div>
    );
};

export const OmokPieceB = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={`${styles.piece} ${styles.bottomBold}`}/>
                <div className={styles.piece}/>
            </div>
            <div className={styles.colWrapper}>
                <div className={`${styles.piece} ${styles.left} ${styles.bottomBold}`}/>
                <div className={styles.piece}/>
            </div>
        </div>
    );
};

export const OmokPieceLBCorner = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={styles.piece}/>
            </div>
            <div className={styles.colWrapper}>
                <div
                    className={`${styles.piece} ${styles.leftBold} ${styles.bottomBold}`}
                />
                <div className={styles.piece}/>
            </div>
        </div>
    );
};

export const OmokPieceRBCorner = () => {
    return (
        <div className={styles.pieceWrapper}>
            <div className={styles.colWrapper}>
                <div
                    className={`${styles.piece} ${styles.rightBold} ${styles.bottomBold}`}
                />
                <div className={styles.piece}/>
            </div>
            <div className={styles.colWrapper}>
                <div className={styles.piece}/>
                <div className={styles.piece}/>
            </div>
        </div>
    );
};
