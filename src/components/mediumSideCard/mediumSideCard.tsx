import React from 'react';
import './mediumSideCard.scss';
import classNames from "classnames";


export function MediumSideCard ({large=false}) {
    return (
        <div className={"d-flex rounded-3 p-2 medium-side-card"}>
            <div className={classNames("d-flex align-items-start justify-content-center", large ? 'col-2' : 'col-3')}>
                <img className={"rounded-5 img-fluid"} alt={"sidecard-picture"} src={'https://placehold.co/100x100'}/>
            </div>
            <div className={classNames("ps-3 d-flex flex-column align-items-start", large ? 'col-10' : 'col-9')}>
                <text className={"h5 text-white d-flex flex-column"}>
                    <h2 className={"h5 fw-semibold text-wrap danger-hover serif-font medium-side-card-text "}>
                        Lorem ipsum dolor sit amet.
                        {large && (<text>dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </text>)}
                    </h2>
                    <span className={classNames("text-black sans-serif-font mt-1", large ? 'card-author-lg' : 'card-author')}>LOREM IPSUM DOLOR</span>
                    <span className={"text-author-style"}>lorem ipsum</span>
                </text>

            </div>
        </div>
    )
}

