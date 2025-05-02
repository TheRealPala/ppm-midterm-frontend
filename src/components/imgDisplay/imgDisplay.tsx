import React from 'react';
import './imgDisplay.scss';


export function ImgDisplay () {
    return (
        <div className="w-full position-relative d-flex justify-content-center align-items-start">
            <img className={"img-display-fluid img-display-margin"} alt={"imgDisplay illustration"} src={"https://placehold.co/862x484"} />
            <div className={"w-100 position-absolute bottom-0 d-flex align-items-center justify-content-center h-50"}>
                <div className={"h-100 img-display-text pt-4 ps-4 pe-4 pb-0 text-center d-flex flex-column justify-content-start align-items-center"}>
                    <text className={"bg-card-gray p-1 pb-0"}>LOREM IPSUM</text>
                    <text className={"text-size-dynamic serif-font"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </text>
                    <text className={"text-author-style"}>lorem ipsum dolor</text>
                </div>
            </div>
        </div>
    )
}
