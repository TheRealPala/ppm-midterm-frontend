import React from 'react';
import './colsWrapper.scss';
import classNames from "classnames";


export function ColsWrapper({title, firstCol, secondCol, thirdCol}:any) {
    const isNodeValid = (node: any) => {
        const validNode = React.Children.toArray(node).filter((child) => {
            return React.isValidElement(child);
        });
        return validNode.length > 0;
    }
    //TODO: Vertical divider as golbal class
    return (
        <div className="w-full d-flex flex-column p-3 border-standard">
            <div className={"d-flex w-full justify-content-center align-items-center mb-3"}>
                <span className={"h2 fw-semibold serif-font border-main-title"}>{title}</span>
            </div>
            <div className={"d-flex flex-md-row flex-column justify-content-center align-items-center"}>
                { isNodeValid(firstCol) &&
                    <div className={classNames("col-12 pe-md-3 mb-5 mb-md-0 ver-divider order-md-1 order-3", isNodeValid(thirdCol) ? 'col-md-3 carousel-top' : 'col-md-6')}>
                        <div className={"h-full text-center mb-3"}>
                            {firstCol}
                        </div>
                    </div>
                }
                { isNodeValid(secondCol) &&
                    <div className={classNames("col-12 ps-md-3 order-md-2 order-1", isNodeValid(thirdCol) ? 'col-md-6 ver-divider' : 'col-md-6')}>
                        <div className={"h-full text-center mb-3"}>
                            {secondCol}
                        </div>
                    </div>
                }
                {
                    isNodeValid(thirdCol) &&
                    <div className={"col-md-3 col-12 ps-md-3 order-md-3 order-2"}>
                        <div className={"h-full text-center mb-3"}>
                            {thirdCol}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

