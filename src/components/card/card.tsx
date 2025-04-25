import React from 'react';
import './card.scss';


export function Card({title, body}:any) {

    return (
        <div className={"d-flex flex-column align-items-center justify-content-between"}>
            <div className={"serif-font card-title fw-semibold h3 mb-3"}>
                {title}
            </div>
            <div className={"img-container position-relative width-card"}>
                <img alt="card illustration" className={"position-absolute top-0 z-0"} src={"https://placehold.co/290x516"}/>
                <div className={"card-text position-absolute bottom-0 z-1 w-full text-start"}>
                    {body}
                </div>
            </div>

        </div>
    )
}


