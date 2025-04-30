import React from 'react';
import './sideDisplay.scss';
import classNames from "classnames";


export function SideDisplay({title, text, bottomBorder=true, additionalClasses}:any) {
    return (
        <div className={classNames("d-flex flex-column justify-content-start align-items-center side-display py-3 ", {'border-bottom border-1 border-black': bottomBorder}, additionalClasses)}>
            <div className={"w-full d-flex align-items-center center h4 mb-3"}>
                <span className={"border-main-title fw-semibold serif-font"}>{title}</span>
            </div>
            <img className={"img-fluid"} alt="sideBanner illustration" src={'https://placehold.co/299x168'} />
            <div className={"w-100 text-center p-2 h4 fw-semibold serif-font text-wrap"}>
                {text}
            </div>
        </div>
    );
}

