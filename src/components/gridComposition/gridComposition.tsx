import React from 'react';
import './gridComposition.scss';
import {RowDisplay} from "../rowDisplay/rowDisplay";


export function GridComposition({rows = 2, cols = 3, hideAllPics=false, hidePicsInLastRow=true, hideFistDivider = false, sport=false}) {
    return (
        <div className="d-flex flex-column w-full align-items-center">
            {[...Array(rows)].map((_, row) => (
                <>
                {(!hideFistDivider || row !== 0) && <div className={"top-comp-divider mt-2"}></div>}
                    <div
                        className={"d-flex flex-column flex-md-row align-items-center justify-content-between row-comp-wrapper overflow-x-scroll pt-2"}>
                        {[...Array(cols)].map((_, col) => (
                                <RowDisplay last={col === cols - 1}
                                    hidePics = {(hidePicsInLastRow && row === rows - 1) || hideAllPics}
                                    body={
                                        <>
                                            <div className={"w-full h-full text-start fw-semibold"}>
                                                <span className={sport ? "sport-title" : ''}>Lorem ipsum</span>
                                                <span className={sport ? "blue-text-hover" : ''}> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</span>
                                                <br />
                                                <span className={"text-author-style fw-normal"}>lorem ipsum</span>
                                            </div>
                                        </>
                                    }/>
                            )
                        )}
                    </div>
                </>
            ))}
        </div>
    )
}

