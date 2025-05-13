import React from 'react';
import './smallSideCard.scss';


export function SmallSideCard () {
    return (
        <div className={"d-flex rounded-3 p-2 small-side-card"}>
            <div className={"col-4"}>
                <img className={"rounded-3 img-fluid"} alt={"sidecard-picture"} src={'https://placehold.co/80x80'}/>
            </div>
            <div className={"col-8 d-flex flex-column align-items-start"}>
                <text className={"h6 text-white"}>
                    <span className={"text-light fw-semibold"}>LOREM IPSUM</span> <br />
                    <span className={"fw-semibold text-wrap light-hover"}> Lorem ipsum dolor sit amet.
                    </span> <br />
                    <span className={"card-author"}>LOREM IPSUM DOLOR</span>
                </text>

            </div>
        </div>
    )
}

