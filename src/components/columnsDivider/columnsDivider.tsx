import React from 'react';
import './columnsDivider.scss';

export function ColumnsDivider({left, right}: any) {
    return (
        <div className="w-full d-flex overflow-y-hidden">
            <div className={"col-12 col-md-9 h-100"}>
                {left}
            </div>
            <div className={"col-3 d-none d-md-inline h-full border-end border-bottom border-1 border-black position-relative col-right overflow-y-hidden"}>
                {right}
            </div>
        </div>
    )
}

