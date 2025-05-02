import React from 'react';
import './bottomWidgets.scss';
import timeService from "../../services/timeService";

const WeatherGames = () => (

    <div className={"wg-wrapper pb-5 d-flex justify-content-center flex-md-row flex-column me-2 ps-2 wg-border-bottom"}>
        <div className={"col-md-6 col-12 d-flex flex-column wg-border-top me-auto"}>
            <div className={"d-flex justify-content-between p-2 pt-2 mb-5 w-header"}>
                <span className={"py-1"}>LOREM</span>
                <span className={"py-1 px-3 w-top-button"}>LOREM IPSUM</span>
            </div>
            <div className={"d-flex w-row"}>
                <div className={"col-7 wg-border-right d-flex align-items-center justify-content-center"}>
                    <img alt={"weather"} className={"img-fluid"} src={"https://placehold.co/125x125"}/>
                    <div className={"d-flex flex-column ms-3 w-text"}>
                        <span className={"fs-3 fw-semibold"}>Lorem</span>
                        <span className={"fs-3 "}>Lorem</span>
                        <span className={"fs-4 color-text-gray mt-2"}>{timeService.getDayStringShort()}</span>
                        <span className={"w-temp fw-semibold"}>20°</span>
                    </div>
                </div>
                <div className={"col-12 col-sm-5 d-flex flex-column p-1 ps-sm-4 pt-3"}>
                    <div className={"d-flex wg-border-bottom w-top-list ps-2 pb-3 align-items-center"}>
                        <img alt={"day time"} src={"https://placehold.co/40x40"}/>
                        <text className={"ps-4"}>lorem ipsum</text>
                    </div>
                    <div className={"d-flex wg-border-bottom ps-2 pb-3 pt-3 align-items-center"}>
                        <img alt={"day time"} src={"https://placehold.co/40x40"}/>
                        <text className={"ps-4"}>lorem ipsum</text>
                    </div>
                    <div className={"d-flex ps-2 pt-3 align-items-center"}>
                        <img alt={"day time"} src={"https://placehold.co/40x40"}/>
                        <text className={"ps-4"}>lorem ipsum</text>
                    </div>
                </div>
            </div>
        </div>

        <div className={"col-md-6 col-12 d-flex flex-column wg-border-top ms-2 mt-5 mt-md-0"}>
            <div className={"d-flex justify-content-between p-2 pt-2 mb-5 w-header"}>
                <span className={"py-1"}>LOREM</span>
            </div>
            <div className={"d-flex w-row"}>
                <div
                    className={"col-6 wg-border-right d-flex flex-column align-items-center justify-content-center pb-2 pb-sm-0"}>
                    <span className={"color-text-gray mb-2"}>lorem</span>
                    <img alt={"weather"} className={"img-fluid"} src={"https://placehold.co/136x136"}/>
                </div>
                <div
                    className={"col-6 d-flex flex-column align-items-center justify-content-center pt-2 pt-sm-0"}>
                    <span className={"color-text-gray mb-2"}>lorem</span>
                    <img alt={"weather"} className={"img-fluid"} src={"https://placehold.co/136x136"}/>
                </div>
            </div>
        </div>

    </div>
);
const Horoscope = () => (
    <div className={"w-full d-flex flex-column align-items-start p-2 wg-border-bottom"}>
        <span className={"fw-semibold my-3"}>LOREM</span>
        <section
            className={"mt-1 p-sm-3 w-100 d-flex overflow-x-scroll align-items-center justify-content-between gap-5 mb-4"}>
            {[...Array(12)].map((_, index) => (
                <div className={"d-flex flex-column justify-content-center align-content-center"}>
                    <img alt={"horoscope sign"} className={"img-fluid"} src={"https://placehold.co/60x60"}/>
                    <span className={"mt-2"}>Lorem</span>
                </div>
            ))}
        </section>
    </div>
)

export function BottomWidgets() {
    return (
        <div className="border-standard p-sm-4 py-3 px-1">
            <WeatherGames/>
            <Horoscope/>
        </div>
    )
}

