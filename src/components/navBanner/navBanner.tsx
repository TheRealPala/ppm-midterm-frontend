import React from 'react';
import './navBanner.scss';


export function NavBanner() {
  return (
    <div className="w-full nav-banner-wrapper d-flex align-items-center justify-content-center">
        <div className="custom-width d-flex nav-banner h-100 justify-content-center">
            <div className="flex-fill h-full ms-1">
                <img className={"banner-img"} alt={"banner placeholder"}
                    src={"https://placehold.co/250x140"}/>
            </div>
            <div className=" col-8 col-md-10 h-100 text-wrap fw-bold nav-banner-content ps-3 d-flex justify-content-start">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            </div>
        </div>
    </div>
  );
}
