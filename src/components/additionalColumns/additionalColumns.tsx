import React from 'react';
import './additionalColumns.scss'
import classNames from "classnames";

export function additionalColumns({standard = false, sport = false, grey = false, hideSecondCol = false}) {
    return (
        <div className={"w-full px-sm-4 px-3"}>
            <div className={"add-cols-wrapper d-flex flex-column flex-md-row w-100 py-3"}>
                <div
                    className={classNames("col-12 d-flex flex-md-row flex-row-reverse justify-content-between justify-content-md-center ", hideSecondCol ? '' : 'col-md-8 adds-cols-div ps-3 ps-md-0')}>
                    <div className={classNames(hideSecondCol ? "col-4" : "col-6")}>
                        <img className={"img-fluid"} alt="additional info illustration"
                             src={"https://placehold.co/332x188"}/>
                    </div>
                    <div className={classNames(hideSecondCol ? "col-8 ps-sm-3" : "col-6")}>
                        <h2 className={"serif-font text-wrap fw-semibold h5 pe-2 text-start"}>
                            <span
                                className={classNames({'text-orange': standard}, {"sport-title": sport}, {'color-text-gray': grey})}>Lorem</span>
                            <span className={classNames({'blue-text-hover': sport || grey})}> ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                            </span>
                            <br/>
                            <span className={"text-author-style fw-light"}>
                                lorem ipsum dolor
                            </span>
                        </h2>
                    </div>
                </div>
                {
                    !hideSecondCol &&
                    <h2 className={"col-md-4 col-12 d-flex align-items-start ps-md-3 pt-3 pt-md-0 h5"}>
                        <text className={"serif-font text-wrap fw-semibold"}>
                            <span
                                className={classNames({'text-orange': standard}, {"sport-title": sport}, {'color-text-gray': grey})}>Lorem</span>
                            <span className={classNames({'blue-text-hover': sport || grey})}> ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                            </span>
                        </text>
                    </h2>
                }

            </div>
        </div>
    );
}

export default additionalColumns;
