import React from 'react';
import './rowDisplay.scss';
import classNames from "classnames";

export function RowDisplay({last, body}: any) {

    return (
        <div className={classNames("divider-wrapper", {"divider-wrapper-border":!last})}>
            <div className={classNames("d-flex flex-row h-100 flex-md-column-reverse row-dis-wrapper serif-font align-items-md-center justify-content-center ", {"divider": !last})}>
                <div
                    className="col-8 col-md-12 text-wrap row-text-container text-center d-flex flex-column align-items-center justify-content-center h-100">
                    {body}
                </div>
                <div className="col-4 col-md-12 d-flex align-items-center justify-content-center">
                    <img className="row-img" src={"https://placehold.co/278x156"}/>
                </div>
            </div>
        </div>


    )
}

