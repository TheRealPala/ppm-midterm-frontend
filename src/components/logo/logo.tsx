import React from 'react';
import './logo.scss';
import timeService from "../../services/timeService";

export function Logo() {
    return (
        <div className="w-full d-none d-md-flex align-items-center justify-content-center">
            <div className="custom-width logo-wrapper">
                <div className="logo-width">
                    <img alt="journal logo"
                         src="https://placehold.co/383x76"/>
                </div>
                <div className="logo-width logo-timestamp">
                    {timeService.getDateTimeString()}
                </div>
            </div>
        </div>
    );
}

