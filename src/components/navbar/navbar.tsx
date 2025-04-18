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
                                    <img alt={"logo"}
                                         src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAcCAYAAAC+uCc6AAACuklEQVRoQ+2XW29xURCGR0kI6hARpxYtaR0u+///gVtRp2gFiWqd4tziyzvJlq0iXZquC76ZG/Y2a2bnncfMbEuhUNiSmCjwgwIWAUUYUVFAQFFRSXxIQBEIlBQQUJRkEicBRRhQUkBAUZJJnAQUYUBJAQFFSSZxOntQ7u7uyOPx0NfXFxWLxV1F4/E4eb1evp7P59RoNGi9XvN1IpEgt9tNFouFBoMBtdvtX5GQTCY593a7pfF4TM1mk7//ZY5fPZiGQ2cPCgq+2WwIwJhBsdlsDA/s5uaGCwggAE8oFKJKpcKg5PN5qtfrDNOp5vf7aTgc8rFUKkWj0Yh6vd6f5jj1mXT5nz0oEMZut1M6nd4DxSzY7e0tw2SAEg6HGZSrqyvKZrNULpfp8/Nzd8RqtfL9arVKy+WS7u/vuWO8v78frUMkEmHwOp0Og/JTDl0F1RX3okHBaPD5fFxsgGGMHuM+Cgt43t7eDvTFSIlGo/xbIBBgaI4Z4uRyOXp5eaHpdMpuKjl0FVVH3IsGxRAMHQWwoOhOp5MBwLhBR8lkMvx9sVgc6ItdBuMFI83ccb47YuytVqvdrnNKDh1F1RHzvwDF5XLxnoIRE4vFeHfpdrusJ2CYTCb08fFxoO/j4yOPNXSTYzsM4mIfQjcx7JQcOoqqI+bFgoJ/9Ww2Y83QUdA9Xl9fKRgM8jhC8Y0dxTwyDJGx8DocDgYI55+fn3dvNGaf6+trqtVqe7VRzaGjoLpinj0oeNtAxzDecrBMYul8eHjgQsPQMQAJdhTsE9gfcAbW7/d5ATUbziFuqVTiJRhdA5/f/Z6enrg7Ga/EiNVqtZRy6CqorrhnD4ouYSTuvgICihChpICAoiSTOAkowoCSAgKKkkziJKAIA0oKCChKMomTgCIMKCkgoCjJJE4CijCgpICAoiSTOP0DUcKpALeICLYAAAAASUVORK5CYII="}/>
                                </span>
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