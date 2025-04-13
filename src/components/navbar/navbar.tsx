import './navbar.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collapse from 'react-bootstrap/Collapse';
import {useState} from "react";
import {faBars, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {NavCollapsed} from "../navCollapsed/navCollapsed";
export function CustomNavbar() {
    const [show, setShow] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCollapse = () => setCollapsed(!collapsed);
    return (
        <>
            <Navbar sticky={"top"} expand={false} className="bg-body">
                    <div className="navbar d-flex justify-content-center w-100 py-1">
                        <div className="d-flex custom-width">
                            <div className="col-5 flex color-change">
                                <span className="nav-text btn navbar-color color-change" onClick={handleShow}>
                                    <FontAwesomeIcon icon={faBars}/> <span className={"ms-1"}>Menu</span>
                                </span>
                                <span onClick={handleCollapse}  aria-controls="example-collapse-text"
                                        aria-expanded={collapsed} className="d-none d-md-inline nav-text btn navbar-color color-change">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/> <span className={"ms-1"}>Cerca</span>
                                </span>
                            </div>
                            <div className="col-2 text-center align-content-center navbar-color subscribe fw-bold">
                                <span className="color-change">ABBONATI</span>
                            </div>
                            <div className="col-5 d-flex text-center align-items-center justify-content-end navbar-color pe-2">
                                <span className="color-change me-3">
                                    <FontAwesomeIcon icon={faHtml5} />
                                </span>
                                <span className="nav-text color-change">
                                     <span className={"me-2"}>Accedi</span><FontAwesomeIcon icon={faUser}/>
                                </span>
                            </div>
                        </div>
                        <Collapse in={collapsed}>
                            <div className="w-full min-vw-100">
                                <NavCollapsed setCollapsed={setCollapsed}/>
                            </div>
                        </Collapse>
                    </div>
                    <Navbar.Offcanvas
                        placement="start"
                        aria-labelledby={'offcanvasNavbar'}
                        show={show} onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={'offcanvasNavbar-expand-false'}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={'offcanvasNavbar-expand-false'}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
            </Navbar>
        </>
    );
}