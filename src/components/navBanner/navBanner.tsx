import React from 'react';
import './navBanner.scss';

interface navBannerProps {}


export function NavBanner({}: navBannerProps) {
  return (
    <div className="w-full nav-banner d-flex align-items-center justify-content-center">
        <div className="nav-banner-content custom-width">
            PROVA TESTO
        </div>
    </div>
  );
}
