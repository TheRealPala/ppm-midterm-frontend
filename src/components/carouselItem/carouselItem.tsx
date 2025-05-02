import React from 'react';
import './carouselItem.scss';
import classNames from "classnames";

export function CarouselItem({columnView=false, last, body, hidePic=false}: any) {

    return (
        <div className={"divider-wrapper"}>
            <div className={classNames("d-flex flex-column-reverse  serif-font align-items-md-center justify-content-center ", {"divider-row": !last && !columnView}, {"divider-column": !last && columnView}, columnView ? 'row-dis-wrapper-column' : 'row-dis-wrapper-row' )}>
                <div
                    className="col-12 carousel-body text-wrap text-container-md text-center d-flex flex-column align-items-center justify-content-center">
                    {body}
                </div>
                {!hidePic &&
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        {columnView &&  <img alt={"illustration of the news"} className="carousel-img d-none d-md-inline" src={"https://placehold.co/267x156"}/>}
                        {!columnView && <img alt={"illustration of the news"} className="carousel-img d-none d-md-inline" src={"https://placehold.co/278x156"}/>}
                        <img alt={"illustration of the news"} className="carousel-img d-inline d-md-none" src={"https://placehold.co/490x275"}/>
                    </div>
                }
            </div>
        </div>


    )
}

