import './navbar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Collapse from 'react-bootstrap/Collapse';
import {useState} from "react";
import {faBars, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {NavCollapsed} from "../navCollapsed/navCollapsed";
import timeService from "../../services/timeService";
import {NavCanvas} from "../navCanvas/navCanvas";

export function CustomNavbar() {
    const [show, setShow] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const handleShow = () => setShow(true);
    const handleCollapse = () => setCollapsed(!collapsed);
    return (
        <>
            <Navbar sticky={"top"} expand={false} className="bg-body">
                <div className="navbar d-flex flex-column justify-content-center w-100">
                    <div
                        className="d-md-none d-flex col-12 py-1 text-center justify-content-center position-relative mobile-banner">
                        <span className="navbar-color subscribe fw-bold">ABBONATI</span>
                        <div className="position-absolute mobile-logo end-0 me-3">
                            <FontAwesomeIcon size={"lg"} icon={faHtml5}/>
                        </div>
                    </div>
                    <div className="d-flex custom-width mt-2 mt-md-0 ">
                        <div className="col-md-5 col-1 flex color-change">
                                <span className="nav-text btn navbar-color color-change" onClick={handleShow}>
                                    <FontAwesomeIcon size={"lg"} icon={faBars} className={"mt-1"}/>
                                    <span className="ms-1 d-none d-md-inline">Menu</span>
                                </span>
                            <span onClick={handleCollapse} aria-controls="example-collapse-text"
                                  aria-expanded={collapsed}
                                  className="d-none d-md-inline pt-2 nav-text btn navbar-color color-change">
                                    <FontAwesomeIcon size={"lg"} icon={faMagnifyingGlass}/> <span
                                className={"ms-1"}>Cerca</span>
                                </span>
                        </div>
                        <div
                            className="col-md-2 col-10 text-center align-content-center navbar-color subscribe fw-bold">
                            <span className="color-change d-none d-md-inline">ABBONATI</span>
                            <span className="color-change d-inline d-md-none">
                                    <img alt={"journal logo"} src={"https://placehold.co/138x28"} /></span>
                        </div>
                        <div
                            className="col-md-5 col-1 d-flex text-center align-items-center justify-content-end navbar-color pe-3 pt-1">
                                <span className="color-change me-3 d-none d-md-inline">
                                    <FontAwesomeIcon icon={faHtml5}/>
                                </span>
                            <span className="nav-text color-change">
                                     <span className={"me-2 d-none d-md-inline"}>Accedi</span><FontAwesomeIcon
                                icon={faUser} className="me-1"/>
                                </span>
                        </div>
                    </div>
                    <div
                        className="d-md-none d-inline mt-2 navbar-color subscribe text-center w-100 pt-3 pb-1 border-top border-1 border-black">
                        {timeService.getDateTimeString()}
                    </div>
                    <Collapse in={collapsed}>
                        <div className="w-full min-vw-100">
                            <NavCollapsed setCollapsed={setCollapsed}/>
                        </div>
                    </Collapse>
                </div>
                <NavCanvas show={show} setShow={setShow}/>
            </Navbar>
        </>
    );
}