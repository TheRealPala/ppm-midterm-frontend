import React from 'react';
import './colDisplay.scss';

export function ColDisplay({title, body, bottom}: any) {
    return (
        <div className={"d-flex flex-column w-100 border border-1 border-black serif-font fw-semibold"}>
            {title}
            <div className={"d-flex w-100 flex-md-row flex-column-reverse col-dis-wrapper"}>
                <div
                    className="col-12 col-md-5 text-wrap text-container text-center d-flex flex-column align-items-center justify-content-center">
                    {body}
                </div>
                <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
                    <img className="col-img d-md-block d-none" src={"https://placehold.co/481x270"}/>
                    <img className="col-img d-md-none d-block" src={"https://placehold.co/767x767"}/>
                </div>
            </div>
                {bottom}
        </div>

    )
}

