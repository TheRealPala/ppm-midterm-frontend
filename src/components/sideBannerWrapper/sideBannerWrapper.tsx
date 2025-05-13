import React from 'react';
import './sideBannerWrapper.scss';
import {SideImgBanner} from "../sideImgBanner/sideImgBanner";


export function SideBannerWrapper({length=2}) {
    return (
        <div className="d-flex flex-column justify-content-start align-items-center p-2 border-bottom border-1 border-black">
            <text className={"h-full d-flex flex-column h4 mb-4"}>
                <div className={"w-full d-flex flex-column align-items-center justify-content-start"}>
                    <span className={"border-main-title fw-semibold serif-font"}>Lorem ipsum</span>
                    <span className={"h6 pt-3 pb-0 mb-0"}>
                        <text className={"text-danger"}>LOREM</text>
                    </span>
                    <span className={"fw-semibold text-center serif-font"}>
                        Lorem Ipsum dolor sit amet, sed diam nonumy.
                    </span>
                </div>
            </text>
            {[...Array(length)].map((_, index) => (
                <SideImgBanner body={
                    <text className={"w-full text-wrap serif-font fw-semibold h5"}>
                        <span className={"text-danger"}>LOREM IPSUM</span> dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod. <br />
                        <span className={"text-author-style"}> lorem ipsum dolor</span>
                    </text>
                }/>
                )
            )}
        </div>
    )
}
