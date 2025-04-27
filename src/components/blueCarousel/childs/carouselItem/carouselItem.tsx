import React from 'react';
import './carouselItem.scss';
import classNames from "classnames";

export function CarouselItem({last, body}: any) {

    return (
        <div className={"divider-wrapper"}>
            <div className={classNames("d-flex flex-column-reverse row-dis-wrapper serif-font align-items-md-center justify-content-center ", {"divider": !last})}>
                <div
                    className="col-12 carousel-body text-wrap text-container-md text-center d-flex flex-column align-items-center justify-content-center">
                    {body}
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <img className="carousel-img d-none d-md-inline" src={"https://placehold.co/278x156"}/>
                    <img className="carousel-img d-inline d-md-none" src={"https://placehold.co/490x275"}/>
                </div>
            </div>
        </div>


    )
}

