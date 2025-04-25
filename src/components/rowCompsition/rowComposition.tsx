import React from 'react';
import './rowComposition.scss';
import {RowDisplay} from "../rowDisplay/rowDisplay";


export function RowComposition() {
    const length = 4;
    return (
        <div className={"d-flex flex-column align-items-center"}>
            <div className={"top-comp-divider mt-2"}></div>
            <div className={"d-flex flex-column flex-md-row align-items-center justify-content-between row-comp-wrapper overflow-x-scroll pt-2"}>
                {[...Array(length)].map((_, index) => (
                        <RowDisplay last = {index === length - 1 } body={
                            <>
                                <div className={"w-full h-full text-start fw-semibold"}>
                                    <span className={"text-orange text-wrap"}>Lorem ipsum</span> dolor sit amet,
                                    consetetur
                                    sadipscing elitr, sed diam nonumy.
                                </div>
                            </>
                        }/>
                    )
                )}

            </div>
        </div>
    )

}

