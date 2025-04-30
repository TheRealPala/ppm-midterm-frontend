import React from 'react';
import './sideImgBanner.scss';


export function SideImgBanner({body}:any) {
    return (
        <div className="d-flex flex-column justify-content-start align-items-center side-img-banner py-3">
            <img className={"img-fluid"} alt="sideBanner illustration" src={'https://placehold.co/299x168'} />
            <div className={"w-100 text-start pt-2"}>
                {body}
            </div>
        </div>
    );
}

