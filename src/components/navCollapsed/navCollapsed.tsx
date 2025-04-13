import React, { FC } from 'react';
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
            <input type="text" className="form-control search-input" placeholder="Cerca articoli o argomenti"/>
            <span className="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </span>
            <span className="collapsed-button ms-2">
                    <FontAwesomeIcon icon={faXmark} onClick={() => {setCollapsed(false)}}/>
                </span>
        </div>
    </div>
}

