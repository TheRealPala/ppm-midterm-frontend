import React from 'react';
import './textCarousel.scss';
import {CarouselItem} from "../carouselItem/carouselItem";
import {useIsMobile} from "../../services/mobileService";



export function TextCarousel ({length, item}:any) {
    const isMobile = useIsMobile();
    return (
        <div className={"text-carousel d-flex flex-md-column"}>
            {Array.from({length: length}).map((_, index) => (
                <CarouselItem columnView={isMobile} hidePic={true} last={index === length - 1} text={true}
                  body={
                    <div className={"d-flex flex-column align-items-start justify-content-center text-start h-full"}>
                        <text className={"fw-semibold serif-font"}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </text>
                        <text className={"text-author-style fw-normal text-start"}>
                            lorem ipsum dolor
                        </text>
                    </div>
                  }
                />
            ))}
        </div>
    )
}

