import React from 'react';
import './navCollapsed.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";

interface navCollapsedProps {
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavCollapsed ({setCollapsed}:navCollapsedProps) {
    return <div className="nav-collapsed d-flex justify-content-center position-sticky">
        <div
            className="position-relative custom-width search-container d-flex justify-content-center align-items-center">
            <label htmlFor={"search-nav-collapsed"} className="visually-hidden">Cerca articoli o argomenti</label>
            <input id={"search-nav-collapsed"} type="text" className="form-control search-input" placeholder="Cerca articoli o argomenti"/>
            <span className="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </span>
            <span className="collapsed-button ms-3 mt-1">
                    <FontAwesomeIcon icon={faXmark} className={"close-collapse"} onClick={() => {setCollapsed(false)}}/>
            </span>
        </div>
    </div>
}

