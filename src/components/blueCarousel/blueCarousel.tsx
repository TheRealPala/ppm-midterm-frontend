import React from 'react';
import './blueCarousel.scss';
import {CarouselItem} from '../carouselItem/carouselItem';
import classNames from "classnames";


export function BlueCarousel({title, columns = false, hidePics = false}: any) {
    const length = 4;
    return (
        <>
            {title}
            <div className={classNames("blue-carousel d-flex border-standard", columns ? "flex-column rounded-4" : "")}>
                {Array.from({length: length}).map((_, index) => (
                    <CarouselItem columnView={columns} hidePic={hidePics} last={index === length - 1} body={
                        <>
                            {!columns &&
                                <text className={"w-full h-full text-start fw-semibold text-white"}>
                                    Lorem ipsum dolor sit amet,
                                    consetetur
                                    sadipscing elitr, sed diam nonumy.
                                </text>
                            }
                            {
                                columns &&
                                <text
                                    className={"h6 w-full h-full text-start fw-semibold text-white sans-serif-font pt-2 ps-2"}>
                                    TITLE<br/>
                                    <span>
                                    Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy.
                                </span>

                                </text>
                            }
                        </>
                    }/>
                ))}
            </div>
        </>
    )
}
