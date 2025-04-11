import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {List} from 'react-bootstrap-icons'
import {useState} from "react";
export function CustomNavbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar expand={false} className="bg-body border border-2 border-black">
                <Container fluid >
                    <div className="row col-12">
                        <div className="col-2">
                            <button className="btn" onClick={handleShow}>
                                <List></List>Menu
                            </button>
                        </div>
                        <div className="col-8 text-center flex justify-content-center align-content-center">
                            Abbonati
                        </div>
                        <div className="col-2">
                            prova
                        </div>
                    </div>
                    <Navbar.Offcanvas
                        id={'offcanvasNavbar-expand-false'}
                        placement="start"
                        aria-labelledby={'offcanvasNavbar-expand-false'}
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
                </Container>
            </Navbar>
        </>
    );
}