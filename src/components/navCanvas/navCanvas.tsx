import './navCanvas.scss';
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {NavCanvasSection} from "../navCanvasSection/navCanvasSection";
import {NavCanvasSectionProps} from "../../interfaces/navCanvasSectionPropsInterface";
interface NavCanvasProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavCanvas({show, setShow}: NavCanvasProps) {
    const handleClose = () => setShow(false);
    const sections : NavCanvasSectionProps[] = require("./sections.json").sections;
    return (
        <Navbar.Offcanvas
            placement="start"
            aria-labelledby={'offcanvasNavbar'}
            show={show} onHide={handleClose}
        >
            <div className="h-100 w-100 relative">
                <Offcanvas.Header>
                    <div className="w-100 d-flex align-content-center">
                        <img alt={"logo"} className="me-auto" src={"https://placehold.co/40x60"} />
                        <div className={"position-relative mt-auto mb-auto"}>
                            <input className="canvas-search mt-auto mb-auto" type="search" name="query"
                                   placeholder="Ricerca su TITOLO_SITO"/>
                            <span className="search-submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </span>
                        </div>
                        <button onClick={handleClose} className="btn-close mt-auto mb-auto" aria-label="Close"/>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={"scroll-wrapper overflow-y-scroll"}>
                        <div className={"w-full subscribers-content d-flex align-items-center fw-bold text-center"}>
                            <FontAwesomeIcon size={"2x"} icon={faHtml5}/>
                            <span className={"ms-3 mt-1"}>Contenuti per gli abbonati</span>
                        </div>
                        <div
                            className={"w-full subscribers-content d-flex align-items-center fw-bold text-center border-top-0"}>
                            <span>TUTTE LE OFFERTE</span>
                        </div>
                        {
                            sections.map((el: NavCanvasSectionProps, index: number) => {
                                return (
                                    <NavCanvasSection key={"navProps" + index} title={el.title} elements={el.elements}
                                                      bottom={el.bottom}/>
                                )
                            })
                        }
                    </div>
                    <div className={"w-100 canvas-bottom"}>
                        <div className={"col-6 canvas-bottom-content ps-3 fw-semibold"}>
                            Redazione
                        </div>
                        <div className={"col-6 border-end-0 canvas-bottom-content ps-3 fw-semibold"}>
                            Scriveteci
                        </div>
                    </div>
                </Offcanvas.Body>
            </div>
        </Navbar.Offcanvas>
    )
}

