import React from 'react';
import './rowCardCarousel.scss';
import {ResponsiveCard} from "../responsiveCard/responsiveCard";


export function RowCardCarousel() {
    return (
        <div className={"row-card-carousel border-standard"}>
            {Array.from({length: 4}).map((_, index) => (
                <ResponsiveCard />
            ))}
        </div>
    )
}
