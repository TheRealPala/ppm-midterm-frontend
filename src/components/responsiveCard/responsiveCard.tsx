import React from 'react';
import './responsiveCard.scss';


export function  ResponsiveCard () {
    return(
        <div className={"d-flex flex-column justify-content-center align-items-center gap-2"}>
            <img alt="card illustration" className={"res-card-dims res-card-img d-none d-md-inline"} src={"https://placehold.co/290x516"}/>
            <img alt="card illustration" className={"res-card-dims res-card-img d-inline d-md-none"} src={"https://placehold.co/484x861"}/>
            <div className={"text-start res-card-dims serif-font d-flex flex-column"}>
                <span className={"fw-semibold text-wrap text-start res-card-line-height mb-0 res-card-text" }>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                </span>
                <span className={" text-wrap text-start h6 res-card-line-height"}>
                    Lorem ipsum
                </span>
            </div>
        </div>
    );
}

