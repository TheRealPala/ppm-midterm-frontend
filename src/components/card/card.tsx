import React from 'react';
import './card.scss';


export function Card({title, body}:any) {

    return (
        <div className={"d-flex flex-column align-items-center justify-content-between"}>
            <div className={"serif-font border-main-title fw-semibold h3 mb-3 mt-1"}>
                {title}
            </div>
            <div className={"img-container position-relative width-card rounded-3 d-flex justify-content-center"}>
                <img alt="card illustration" className={"position-absolute top-0 z-0 rounded-3 width-card-img"} src={"https://placehold.co/275x460"}/>
                <div className={"card-text position-absolute text-wrap text-truncate bottom-0 z-1 w-100 text-start"}>
                    {body}
                </div>
            </div>

        </div>
    )
}


