import React from 'react';
import './blueCarousel.scss';
import { CarouselItem } from './childs/carouselItem/carouselItem';


export function BlueCarousel() {
    const length = 4;
    return (
        <div className={"blue-carousel border-standard"}>
            {Array.from({length: length}).map((_, index) => (
                <CarouselItem last = {index === length - 1 } body={
                    <>
                        <div className={"w-full h-full text-start fw-semibold text-white"}>
                            Lorem ipsum dolor sit amet,
                            consetetur
                            sadipscing elitr, sed diam nonumy.
                        </div>
                    </>
                }/>
            ))}
        </div>
    )
}
