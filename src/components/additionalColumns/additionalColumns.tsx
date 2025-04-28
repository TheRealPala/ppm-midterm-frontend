import React from 'react';
import './additionalColumns.scss'

export function additionalColumns() {
    return (
        <div className={"w-full px-4"}>
            <div className={"add-cols-wrapper d-flex flex-column flex-md-row w-100 py-3"}>
                <div className={"col-md-8 col-12 d-flex flex-md-row flex-row-reverse justify-content-between justify-content-md-center adds-cols-div"}>
                    <div className={"col-6"}>
                        <img className={"img-fluid"} alt="additional info illustration" src={"https://placehold.co/282x158"}/>
                    </div>
                    <div className={"col-6"}>
                        <text className={"serif-font text-wrap fw-semibold h5"}>
                            <span className={"text-orange"}>Lorem</span> ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                            <br/>
                            <span className={"text-author-style fw-light"}>
                            lorem ipsum dolor
                        </span>
                        </text>
                    </div>
                </div>

                <div className={"col-md-4 col-12 d-flex align-items-start ps-md-3 pt-3 pt-md-0 h5"}>
                    <text className={"serif-font text-wrap fw-semibold"}>
                        <span className={"text-orange"}>Lorem</span> ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy.
                    </text>
                </div>

            </div>
        </div>
    );
}

export default additionalColumns;
