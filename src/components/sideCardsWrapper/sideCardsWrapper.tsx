import React from 'react';
import './sideCardsWrapper.scss';


export function SideCardWrapper({title, length = 4, element}: any) {
    return (
        <div className={"d-flex flex-column"}>
            {title}
            <div
                className="d-flex flex-column align-items-start justify-content-center p-2 gap-4 border-bottom border-solid border-black">
                {[...Array(length)].map((_, index) => (
                    element
                ))}
            </div>
        </div>
    )
}

