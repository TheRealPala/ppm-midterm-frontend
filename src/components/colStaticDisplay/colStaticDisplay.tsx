import React from 'react';
import './colStaticDisplay.scss';
import classNames from "classnames";

export function ColStaticDisplay({title, body, bottom, additionalClasses}: any) {
    return (

        <div
            className={classNames("d-flex flex-column w-100 border border-1 border-black border-top-0 serif-font fw-semibold pt-4", additionalClasses)}>
            <div className={"d-flex align-items justify-content-center"}>
                {title}
            </div>
            <div className={"d-flex w-100 flex-column-reverse col-static-dis-wrapper"}>
                <div
                    className="col-12 text-wrap text-container text-center d-flex flex-column align-items-center justify-content-center">
                    {body}
                </div>
                <div className="col-12  d-flex align-items-center justify-content-center">
                    <img className="col-img d-md-block d-none" src={"https://placehold.co/862x484"}/>
                    <img className="col-img d-md-none d-block" src={"https://placehold.co/767x767"}/>
                </div>
            </div>
            {bottom}
        </div>
    )
}

