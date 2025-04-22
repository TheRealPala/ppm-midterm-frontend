import React from 'react';
import './navDropdowns.scss';
import {NavDataDropdownsProps} from "../../interfaces/navDataDropdownsPropsInterface";
import {NavDropdown} from "./childs/navDropdown/navDropdown";


export function NavDropdowns () {
    const sections: NavDataDropdownsProps = require('./data/sections.json');
    const locals : NavDataDropdownsProps = require('./data/locals.json');
    const services : NavDataDropdownsProps = require('./data/services.json');
    return <div className="custom-width page-header position-relative">
        <nav className={"nav-dropdown d-none d-md-flex"}>
            <NavDropdown props={sections} grid={true}></NavDropdown>
            <NavDropdown props={locals} grid={false}></NavDropdown>
            <NavDropdown props={services} grid={true}></NavDropdown>
        </nav>
        <div className={"ps-3 w-100 nav-topics-wrapper overflow-x-scroll"}>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
        </div>
    </div>
}

