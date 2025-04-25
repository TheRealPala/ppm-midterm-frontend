import {CustomNavbar} from "../components/navbar/navbar";
import {NavBanner} from "../components/navBanner/navBanner";
import {Logo} from "../components/logo/logo";
import {NavDropdowns} from "../components/navDropdowns/navDropdowns";
import {ColDisplay} from "../components/colDisplay/colDisplay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {RowComposition} from "../components/rowCompsition/rowComposition";
import {ColStaticDisplay} from "../components/colStaticDisplay/colStaticDisplay";


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
                        bottom = {<RowComposition/>}
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
                    } />

                </div>
            </div>
        </>
    );
}