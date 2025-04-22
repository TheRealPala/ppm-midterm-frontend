import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './navDropdown.scss';
import {NavDataDropdownsProps} from "../../../../interfaces/navDataDropdownsPropsInterface";

interface GridDropdownProps {
    props: NavDataDropdownsProps;
    grid: boolean;
}

export function NavDropdown({props, grid}: GridDropdownProps) {
    return (
        <Dropdown>
            <Dropdown.Toggle className="fw-semibold" variant={"false"}>
                {props.toggle}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className={"w-full h-full d-flex justify-content-center align-items-center"}>
                    <div className={grid ? "dropdown-grid" : "dropdown-row"}>
                            {props.items.map(
                                (item: string) => {
                                    return (
                                        <li className="menu-sezioni__item fw-semibold">
                                            <a className="menu-sezioni__link" href="#"
                                               title={"vai alla sezione" + item}>{item}</a>
                                        </li>
                                    )
                                }
                            )}
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

