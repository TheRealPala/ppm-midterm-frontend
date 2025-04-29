import React from 'react';
import './additionalColumns.scss'
import classNames from "classnames";

export function additionalColumns({sport=false, hideSecondCol=false}) {
    return (
        <div className={"w-full px-4"}>
            <div className={"add-cols-wrapper d-flex flex-column flex-md-row w-100 py-3"}>
                <div className={classNames("col-12 d-flex flex-md-row flex-row-reverse justify-content-between justify-content-md-center ", hideSecondCol ? '' : 'col-md-8 adds-cols-div')}>
                    <div className={classNames(hideSecondCol ? "col-4" : "col-6")}>
                        <img className={"img-fluid"} alt="additional info illustration" src={"https://placehold.co/332x188"}/>
                    </div>
                    <div className={classNames(hideSecondCol ? "col-8 ps-3" : "col-6")}>
                        <text className={"serif-font text-wrap fw-semibold h5 pe-2 text-start"}>
                            <span className={classNames( sport ? "sport-title" : "text-orange")}>Lorem</span> ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                            <br/>
                            <span className={"text-author-style fw-light"}>
                            lorem ipsum dolor
                        </span>
                        </text>
                    </div>
                </div>
                {
                    !hideSecondCol &&
                    <div className={"col-md-4 col-12 d-flex align-items-start ps-md-3 pt-3 pt-md-0 h5"}>
                        <text className={"serif-font text-wrap fw-semibold"}>
                            <span className={classNames( sport ? "sport-title" : "text-orange")}>Lorem</span> ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy.
                        </text>
                    </div>
                }

            </div>
        </div>
    );
}

export default additionalColumns;
