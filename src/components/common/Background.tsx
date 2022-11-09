import React from 'react';
import "../../shared/styles/background.scss";
import bg from "../../assets/icons/bg.svg";

const Background = () => {
    return (
        <div className="background">
            <div className="bgShadow"/>
            <div className="bgCatsWrapper">
                <img src={bg} alt="background" className="bgCats"/>
            </div>
        </div>
    );
};

export default Background;