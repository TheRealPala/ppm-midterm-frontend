import React from 'react';
import './bottomWidgets.scss';
import timeService from "../../services/timeService";

const WeatherGames = () => (

    <div className={"wg-wrapper pb-5 d-flex justify-content-center flex-md-row flex-column wg-border-bottom"}>
        <div className={"col-md-6 col-12 d-flex flex-column wg-border-top me-3"}>
            <div className={"d-flex justify-content-between p-2 pt-2 mb-5 w-header"}>
                <span className={"py-1 fw-semibold"}>LOREM</span>
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

        <div className={"col-md-6 col-12 d-flex flex-column wg-border-top ms-3 mt-5 mt-md-0"}>
            <div className={"d-flex justify-content-between p-2 pt-2 mb-5 w-header"}>
                <span className={"py-1 fw-semibold"}>LOREM</span>
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
    <div className={"w-full d-flex flex-column align-items-start p-2"}>
        <span className={"fw-semibold my-3"}>LOREM</span>
        <section
            className={"mt-1 p-sm-3 w-100 d-flex overflow-x-scroll align-items-center justify-content-between gap-4 mb-4"}>
            {[...Array(12)].map((_, index) => (
                <div className={"d-flex flex-column justify-content-center align-content-center"}>
                    <img alt={"horoscope sign"} className={"img-fluid"} src={"https://placehold.co/60x60"}/>
                    <span className={"mt-2"}>Lorem</span>
                </div>
            ))}
        </section>
    </div>
)

const WordsSection = () => (
    <div className={"wg-wrapper pb-5 d-flex justify-content-center align-items-md-start align-items-center flex-md-row flex-column me-md-3 ps-md-2"}>
        <div className={"col-md-6 col-12 d-flex flex-column me-md-2 wg-border-top"}>
            <div className={"d-flex justify-content-between p-2 pt-2 mb-3 fs-6"}>
                <span className={"py-1 fw-semibold"}>LOREM</span>
            </div>
            <div className={"w-full d-flex justify-content-center align-items-center w-font"}>
                <span className={"wg-border-right pe-5 text-end"}>LOREM</span>
                <span className={"ps-5 text-start"}>LOREM-IPSUM</span>
            </div>
            <label className={"w-full text-center w-font mt-3 px-4"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</label>
            <input type="text" name="cerca" className="wb-search" id="cerca" value=""/>
            <div className={"d-flex align-content-center justify-content-center"}>
                <button type="submit" name="vai" className="w-button" value="Cerca">CERCA</button>
            </div>
        </div>

        <div className={"col-md-6 col-12 d-flex flex-column ms-md-3 wg-border-top wg-border-right wg-border-bottom wg-border-left"}>
            <span className={"w-full text-center py-2 fs-5"}><span className={"text-danger"}>LO</span>REM<span className={"text-danger"}>IPSUM</span></span>
            <div className={"overflow-x-hidden position-relative"}>
                <img src={"https://placehold.co/800x176"} alt={"background-img"} className={"img-book-banner"}/>
                <div className={"position-absolute bottom-0 w-font ps-3"}>
                    <span className={"text-white bg-danger p-1 w-auto"}>LOREM</span> <br />
                    <span className={"fw-semibold text-white"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </span>
                </div>
            </div>
            <div className={"d-flex ps-3 py-3"}>
                <img alt={"book-cover"} src={'https://placehold.co/72x106'}/>
                <div className={"ps-2 d-flex flex-column "}>
                    <span className={"mb-2 fs-6"}>Lorem ipsum dolor</span>
                    <span className={"w-font"}>LOREM IPSUM</span>
                    <span className={"w-font text-danger"}> LO-REMIPSUM</span>
                </div>
            </div>
            <div className={"wg-border-top w-100 w-font d-flex py-1"}>
                <span className={"col-6 text-center wg-border-right"}>lorem ipsum dolor sit amet</span>
                <span className={"col-6 text-center"}>lorem ipsum dolor sit amet</span>
            </div>
        </div>

    </div>

)

export function BottomWidgets() {
    return (
        <div className="border-standard p-md-4 py-3 px-sm-1">
            <WeatherGames/>
            <Horoscope/>
            <WordsSection/>
        </div>
    )
}

