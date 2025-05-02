import {useIsMobile} from "../services/mobileService";
import {CustomNavbar} from "../components/navbar/navbar";
import {NavBanner} from "../components/navBanner/navBanner";
import {Logo} from "../components/logo/logo";
import {NavDropdowns} from "../components/navDropdowns/navDropdowns";
import {ColDisplay} from "../components/colDisplay/colDisplay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {RowComposition} from "../components/rowCompsition/rowComposition";
import {ColStaticDisplay} from "../components/colStaticDisplay/colStaticDisplay";
import {RowCardCarousel} from "../components/rowCardCarousel/rowCardCarousel";
import {BlueCarousel} from "../components/blueCarousel/blueCarousel";
import {Card} from "../components/card/card";
import {ColumnsDivider} from "../components/columnsDivider/columnsDivider";
import AdditionalColumns from "../components/additionalColumns/additionalColumns";
import timeService from "../services/timeService";
import {SmallSideCard} from "../components/smallSideCard/smallSideCard";
import {SideCardWrapper} from "../components/sideCardsWrapper/sideCardsWrapper";
import {MediumSideCard} from "../components/mediumSideCard/mediumSideCard";
import {SideBannerWrapper} from "../components/sideBannerWrapper/sideBannerWrapper";
import {SideDisplay} from "../components/sideDisplay/sideDisplay";
import {GridComposition} from "../components/gridComposition/gridComposition";
import ImgDisplayWrapper from "../components/imgDisplayWrapper/imgDisplayWrapper";
import {ColsWrapper} from "../components/colsWrapper/colsWrapper";
import {TextCarousel} from "../components/textCarousel/textCarousel";
import {BottomWidgets} from "../components/bottomWidgets/bottomWidgets";


export function Home() {
    return (
        <>
            <CustomNavbar/>
            <NavBanner/>
            <Logo/>
            <div className={"w-100 d-flex flex-column align-items-center justify-content-center"}>
                <NavDropdowns/>
                <div className={"custom-width"}>
                    <ColDisplay
                        title={
                            <>
                                <div className={"w-100 h-100 d-flex text-center h4 mb-0 justify-content-center mt-2"}>
                                    <span className={"border-bottom border-3 border-danger fw-bold"}>Lorem ipsum</span>
                                </div>
                            </>
                        }
                        body={
                            <>
                                <div
                                    className={"w-100 d-flex justify-content-md-start justify-content-center h6 text-danger"}>
                                    <FontAwesomeIcon icon={faCircle} size={"xs"} className={"text-danger blink"}/>
                                    <span className={"ms-2 sans-serif-font"}>LOREM IPSUM </span>
                                </div>
                                <div className={"text-md-start"}>
                                    <span className={"text-danger"}>Lorem ipsum</span> dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy.
                                </div>
                            </>
                        }
                        bottom={<RowComposition/>}
                    />
                    <ColStaticDisplay body={
                        <>
                            <div
                                className={"w-100 d-flex justify-content-center h6"}>
                                <span className={"ms-2 sans-serif-font text-orange fw-semibold"}>LOREM IPSUM </span>
                            </div>
                            <div className={"text-center"}>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy <span className={"text-orange"}>| Lorem ipsum</span>
                            </div>
                        </>
                    }/>
                    <RowCardCarousel/>
                    <div className={"w-full py-3 border-standard"}/>
                    <BlueCarousel />

                    <ColumnsDivider left={
                        <>
                            <ColStaticDisplay
                                body={
                                    <>
                                        <div
                                            className={"w-100 d-flex justify-content-center h6"}>
                                            <span
                                                className={"ms-2 sans-serif-font text-orange fw-semibold"}>LOREM IPSUM </span>
                                        </div>
                                        <div className={"text-center"}>
                                            Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elitr, sed diam nonumy <span className={"text-orange"}>| Lorem ipsum</span>
                                        </div>
                                    </>
                                }
                                bottom={
                                    <AdditionalColumns standard={true}/>
                                }
                            />
                            <div className={"grey-col-dis"}>
                                <ColStaticDisplay
                                    title={
                                        <>
                                            <text className={"h3 fw-semibold"}>Lorem <span
                                                className={"text-orange"}>50</span></text>
                                        </>
                                    }

                                    body={
                                        <>
                                            <div
                                                className={"w-100 d-flex justify-content-center h4"}>
                                                <span
                                                    className={"ms-2 sans-serif-font color-dark-gray fw-semibold"}>{timeService.getDayString()}</span>
                                            </div>
                                            <div className={"text-center h2 fw-semibold"}>
                                                <span className={"blue-text-hover"}>Lorem ipsum dolor sit amet, consetetur</span>
                                                <span className={"color-dark-gray"}> | Lorem ipsum</span>
                                            </div>
                                        </>
                                    }
                                />
                            </div>

                            <ColDisplay
                                additionalClasses="border-top-0 lightblue-col-dis py-3"
                                body={
                                    <>
                                        <div className={"h-100 d-flex flex-column justify-content-start"}>
                                            <text className={"text-md-start h4 serif-font fw-semibold"}>
                                                <span
                                                    className={"sans-serif-font h6 fw-semibold sport-title"}>LOREM <br/> </span>
                                                <span className={"blue-text-hover"}>Lorem ipsum dolor sit  amet, consetetur  sadipscing elitr, sed diam nonumy.</span>
                                                <br/>
                                                <span className={"text-author-style w-100 text-md-start text-center"}>lorem ipsum</span>
                                            </text>
                                        </div>
                                    </>
                                }
                                bottom={<AdditionalColumns sport={true} hideSecondCol={true}/>}
                            />

                            <ColDisplay
                                hideBorderTop={true}
                                additionalClasses="border-top-0"
                                body={
                                    <>
                                        <div className={"h-100 d-flex flex-column align-items-start"}>
                                            <text className={"text-md-start h4 serif-font fw-semibold mt-1"}>
                                                <span className={"text-orange"}>Lorem ipsum</span> dolor sit
                                                amet, consetetur
                                                sadipscing elitr, sed diam nonumy.
                                            </text>
                                            <span className={"text-author-style w-100 text-md-start text-center"}>lorem ipsum</span>
                                        </div>
                                    </>
                                }
                                bottom={<RowComposition length={3}/>}
                            />
                        </>
                    } right={
                        <div
                            className="sticky-col-el d-flex justify-content-center pb-4 border-bottom border-1 border-black">
                            <Card title={"Lorem"} body={
                                <>
                                    <span className={"text-white h6 sans-serif-font"}>LOREM</span>
                                    <div className={"w-100 text-start text-wrap serif-font orange-hover h3 text-white"}>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy.
                                        <br/>
                                        <span className={"text-author-style"}>lorem ipsum</span>
                                    </div>
                                </>
                            }/>
                        </div>
                    }
                    />

                    <ColumnsDivider left={
                        <>
                            <section className={"w-100 pt-2 pb-3 text-center border-standard"}>
                                <text className={"fw-semibold serif-font h4 border-main-title "}>Lorem Ipsum</text>
                            </section>
                            <ColDisplay
                                hideBorderTop={true}
                                additionalClasses="border-top-0 pt-2"
                                body={
                                    <>
                                        <div className={"h-100 d-flex align-items-start flex-column"}>
                                            <text className={"text-md-start h4 serif-font fw-semibold mt-1 text-wrap"}>
                                                <span className={"h6"}><text
                                                    className={"fw-semibold sans-serif-font text-orange"}>LOREM IPSUM</text></span>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua <br/>
                                                <span className={"text-author-style"}>lorem ipsum</span>
                                            </text>
                                        </div>
                                    </>
                                }
                                bottom={<AdditionalColumns standard={true} hideSecondCol={true}/>}
                            />
                            {[...Array(4)].map((_, index) => (
                                <ColDisplay
                                    hideBorderTop={true}
                                    additionalClasses="border-top-0 pt-2"
                                    body={
                                        <>
                                            <div className={"h-100 d-flex align-items-start flex-column"}>
                                                <text
                                                    className={"text-md-start h4 serif-font fw-semibold mt-1 text-wrap"}>
                                                    <span className={"h6"}><text
                                                        className={"fw-semibold sans-serif-font text-orange"}>LOREM IPSUM</text></span>
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                    nonumy
                                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                                    diam
                                                    voluptua <br/>
                                                    <span className={"text-author-style"}>lorem ipsum</span>
                                                </text>
                                            </div>
                                        </>
                                    }
                                />
                            ))}
                            <ColDisplay
                                hideBorderTop={true}
                                additionalClasses="border-top-0 pt-2"
                                body={
                                    <>
                                        <div className={"h-100 d-flex align-items-start flex-column"}>
                                            <text
                                                className={"text-md-start h4 serif-font fw-semibold mt-1 text-wrap"}>
                                                    <span className={"h6"}><text
                                                        className={"fw-semibold sans-serif-font text-orange"}>LOREM IPSUM</text></span>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                                diam
                                                voluptua <br/>
                                                <span className={"text-author-style"}>lorem ipsum</span>
                                            </text>
                                        </div>
                                    </>
                                }
                                bottom={
                                    <>
                                        <RowComposition length={3}/>
                                        <div className={"px-3 mb-3"}>
                                            <section className={"w-100 comment p-2 position-relative"}>
                                                <MediumSideCard large={true} />
                                            </section>
                                        </div>
                                    </>
                                }
                            />
                            <ColDisplay
                                hideBorderTop={true}
                                additionalClasses="border-top-0 pt-2"
                                body={
                                    <>
                                        <div className={"h-100 d-flex align-items-start flex-column"}>
                                            <text
                                                className={"text-md-start h4 serif-font fw-semibold mt-1 text-wrap"}>
                                                    <span className={"h6"}><text
                                                        className={"fw-semibold sans-serif-font text-orange"}>LOREM IPSUM</text></span>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                                diam
                                                voluptua <br/>
                                                <span className={"text-author-style"}>lorem ipsum</span>
                                            </text>
                                        </div>
                                    </>
                                }
                                bottom={<AdditionalColumns standard={true}/>}
                            />
                            <ColDisplay
                                title={
                                    <section className={"w-100 pt-2 pb-1 text-center"}>
                                        <text className={"fw-semibold serif-font h4 border-text-gray-title "}>Lorem Ipsum</text>
                                    </section>
                                }
                                additionalClasses="border-top-0 grey-col-dis py-3"
                                body={
                                    <>
                                        <div className={"h-100 d-flex flex-column justify-content-start"}>
                                            <text className={"text-md-start h4 serif-font fw-semibold"}>
                                                <span className={"sans-serif-font h6 fw-semibold color-text-gray"}>LOREM <br/> </span>
                                                <span className={"blue-text-hover"}>Lorem ipsum dolor sit  amet, consetetur  sadipscing elitr, sed diam nonumy.</span>
                                                <br/>
                                                <span className={"text-author-style w-100 text-md-start text-center"}>lorem ipsum</span>
                                            </text>
                                        </div>
                                    </>
                                }
                                bottom={<AdditionalColumns grey={true} hideSecondCol={false}/>}
                            />

                            <ColStaticDisplay
                                title={
                                    <section className={"w-100 pt-2 pb-1 text-center"}>
                                        <text className={"fw-semibold serif-font h4 border-sport-title "}>Lorem</text>
                                    </section>
                                }
                                additionalClasses="lightblue-col-dis"
                                body={
                                    <>
                                        <div className={"h-100 d-flex flex-column justify-content-center"}>
                                            <text className={"text-center h4 serif-font fw-semibold"}>
                                                <span className={"sans-serif-font h6 fw-semibold sport-title"}>LOREM <br/> </span>
                                                <span className={"blue-text-hover"}>Lorem ipsum dolor sit  amet, consetetur  sadipscing elitr, sed diam nonumy.</span>
                                                <br/>
                                                <span className={"text-author-style w-100 text-center"}>lorem ipsum</span>
                                            </text>
                                        </div>
                                    </>
                                }
                                bottom={<GridComposition sport={true}/>}
                            />
                            <ImgDisplayWrapper />
                        </>
                    } right={
                        <>
                            <div className={"px-2 mt-4 pb-3 border-bottom border-1 border-black"}>
                                <BlueCarousel
                                title={
                                    <>
                                        <section className={"w-100 text-center mb-3"}>
                                            <text className={"fw-semibold serif-font h4 border-dark-blue-title"}>Lorem Ipsum</text>
                                        </section>
                                    </>
                                }
                                columns={true}
                                />
                            </div>
                            <SideCardWrapper length={4} element={<SmallSideCard />}
                                title = {
                                    <>
                                        <section className={"w-100 text-center mb-3 mt-5"}>
                                            <text className={"fw-semibold serif-font h4 border-dark-blue-title"}>Lorem Ipsum</text>
                                        </section>
                                    </>
                                }
                            />
                            <SideCardWrapper length={3} element={<MediumSideCard />}
                                 title = {
                                     <>
                                         <section className={"w-100 text-center mb-3 mt-3"}>
                                             <text className={"fw-semibold serif-font h4 border-main-title"}>Lorem Ipsum</text>
                                         </section>
                                     </>
                                 }
                            />
                            <SideBannerWrapper />
                            <div className={"d-flex border-1 border-bottom border-black p-2 pt-4"}>
                                <div className={"col-6 h-div d-flex flex-column h5 align-items-center "}>
                                    <img src={"https://placehold.co/133x75"}/>
                                    <span className={"h6 mb-0"}>
                                        <text className={"text-orange sans-serif-font fw-semibold"}>
                                            Lorem ipsum
                                        </text>
                                    </span>
                                    <text className={"text-center h5 serif-font fw-semibold"}>
                                        Lorem ipsum dolor sit
                                    </text>
                                </div>
                                <div className={"col-6 d-flex flex-column h5 align-items-center "}>
                                    <img src={"https://placehold.co/133x75"}/>
                                    <span className={"h6 mb-0"}>
                                        <text className={"text-orange sans-serif-font fw-semibold"}>
                                            Lorem ipsum
                                        </text>
                                    </span>
                                    <text className={"text-center h5 serif-font fw-semibold"}>
                                        Lorem ipsum dolor sit
                                    </text>
                                </div>
                            </div>
                            <SideDisplay title={"LOREM IPSUM"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}/>
                            <SideDisplay additionalClasses={"mt-4 mb-4 gray-bg"}  text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}/>
                        </>
                    }
                    />

                    <ColsWrapper
                        title={"Lorem"}
                        firstCol={
                            <ColStaticDisplay
                                additionalClasses="border-0"
                                body={
                                    <>
                                        <div className={"text-center h2 fw-semibold text-wrap"}>
                                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</span>
                                            <br />
                                            <span className={"text-author-style"}> lorem ipsum dolor</span>
                                        </div>

                                    </>
                                }
                            />
                        }
                        secondCol={
                            <GridComposition rows={2} cols={2} hideFistDivider={true}/>
                        }
                    />

                    <ColsWrapper
                        title={"Lorem"}
                        firstCol={
                            <TextCarousel length={3} />
                        }
                        secondCol={
                            <ColStaticDisplay
                                additionalClasses="border-0"
                                body={
                                    <>
                                        <div className={"text-center h2 fw-semibold text-wrap"}>
                                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</span>
                                            <br />
                                            <span className={"text-author-style"}> lorem ipsum dolor</span>
                                        </div>

                                    </>
                                }
                            />
                        }
                        thirdCol={
                            <GridComposition rows={4} cols={1} hideFistDivider={true} hideAllPics={true} />
                        }
                    />
                    <BottomWidgets />
                </div>
            </div>
        </>
    );
}