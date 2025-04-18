import './navCanvas.scss';
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {NavCanvasSection} from "../navCanvasSection/navCanvasSection";

interface NavCanvasProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavCanvas({show, setShow}: NavCanvasProps) {
    const handleClose = () => setShow(false);
    const el ={
        title: "SEZIONI",
        elements: ["Tutte le offerte", "Ultimi articoli", "Ultimi video", "Ultimi Eventi"],
        bottom: "ULTIMI ARTICOLI",
    }
    return (
        <Navbar.Offcanvas
            placement="start"
            aria-labelledby={'offcanvasNavbar'}
            show={show} onHide={handleClose}
        >
            <Offcanvas.Header>
                <div className="w-100 d-flex align-content-center sticky-top">
                    <img alt={"logo"} className="me-auto"
                         src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAzCAYAAAD7JnqGAAACYklEQVRYR+2XSYsiQRCFo8V9x4MrHkRxRfz//8GTehAUcd/FDVFch1dQxVhjd2U0k/YMVEDdoiq/evkyMuKjWq0+6B+MDxOMuSumYkzB6P9VzGq1UqVSMfzh+/1Ot9uNLpcLHQ4H2u/3tNls6PH43qE3VEwU7BX59Xql4XBIq9XK8Mf0CVLB1MXm8zkNBgMWHBsMKvT7/T8WsVgsZLfbyefzKY8+er0eLZdLYTg22Pl8pnq9/uUCHo+H0uk02Ww2LQ/ew3uinpMCBhrA5fP5px9ot9u03W6FVJMGhtWz2ezTts5mM+UwiIRUsHg8TrFYTONYr9fU6XREuIwLrL5ciHhMXTkcDlMymdRAdrsdtVqtnweLRqOUSCQ0EPgLPhMJqVuZSqUoFAppHJx6Jg0MFiiXy4T6pgb8BZ+JhBQwwKCO+f3+n69jv1f+SCRCDofjSRiOWniRrZjINuhzcE/CX5yQBoarB23PZDKh4/HIYVJypYHh4wDD5Y2LnxtssFfdheovt9tNwWDwieF0OlGz2VSaSE6wwYwqP0yPE+lyub5V8dWX/joYPowaViwWn9qebrfL6mSlgAEOWwrl1IAF0I9hNhAJaWBYPJfLkdfr1TjG47FySkVCKhigAKcGDkCtVhNSTSrYK9VGoxFNp1ND0aSDYTBBJ8v1mnQwAKH3xwyghsgV9RawQCBAmUxGAxOZmN4CBqJCoUC4GdTAbLpYLD712tvA9HUNN0ij0fh0znwbGKQplUrkdDo1lb6azg3BDM+1pAQTjCusqZipGFcBbr7pMVMxrgLcfNNjpmJcBbj5vwB2lSQLOJ4acQAAAABJRU5ErkJggg=="}/>
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
                <div className={"w-full subscribers-content d-flex align-items-center fw-bold text-center"}>
                    <FontAwesomeIcon size={"2x"} icon={faHtml5}/>
                    <span className={"ms-3 mt-1"}>Contenuti per gli abbonati</span>
                </div>
                <div className={"w-full subscribers-content d-flex align-items-center fw-bold text-center border-top-0"}>
                    <span>TUTTE LE OFFERTE</span>
                </div>
                <NavCanvasSection title={el.title} elements={el.elements} bottom={el.bottom} />
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    )
}

