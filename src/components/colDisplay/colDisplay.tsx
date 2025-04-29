import React from 'react';
import './colDisplay.scss';
import classNames from "classnames";

export function ColDisplay({additionalClasses, title, body, bottom}: any) {
    return (
        <div className={classNames("d-flex flex-column w-100 border border-1 border-black serif-font fw-semibold ", additionalClasses)}>
            {title}
            <div className={"d-flex w-100 flex-md-row flex-column-reverse col-dis-wrapper"}>
                <div
                    className="col-12 col-md-4 text-wrap text-container text-center d-flex flex-column align-items-center justify-content-center">
                    {body}
                </div>
                <div className="col-12 col-md-8 d-flex align-items-center justify-content-center ms-2">
                    <img className="col-img d-md-block d-none" src={"https://placehold.co/500x300"}/>
                    <img className="col-img d-md-none d-block" src={"https://placehold.co/767x767"}/>
                </div>
            </div>
                {bottom}
        </div>

    )
}

