import React from 'react';
import './imgDisplayWrapper.scss';
import {ImgDisplay} from "../imgDisplay/imgDisplay";

export function imgDisplayWrapper() {
    const ImgDisplayRow = () => (
        <>
            <div className={"hor-divider pb-4"}></div>
            <div className={"d-flex flex-md-row flex-column align-items-center justify-content-center container mb-1"}>
                <div className={"col-md-5 col-12 pe-md-3 mb-5 mb-md-0 ver-divider"}>
                    <ImgDisplay/>
                </div>
                <div className={"col-md-5 col-12 ps-md-3"}>
                    <ImgDisplay/>
                </div>
            </div>
        </>
    );

    return (
        <div>
            <div className={"w-full d-flex flex-column justify-content-start align-items-center px-2 border-standard pt-2"}>
                <div className={"h-full text-center mb-3"}>
                    <span className={"h2 fw-semibold serif-font border-text-gray-title"}>Lorem</span>
                </div>
                <ImgDisplay/>
                {[...Array(3)].map((_, index) => (
                        <ImgDisplayRow key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default imgDisplayWrapper;
