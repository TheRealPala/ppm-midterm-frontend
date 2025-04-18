import React from 'react';
import './navCanvasSection.scss';

interface navCanvasSectionProps {
    title: string,
    elements: string[],
    bottom: string
}

export function NavCanvasSection({title, elements, bottom}: navCanvasSectionProps) {
    return (
        <div key={title} className="w-full d-flex flex-wrap">
            <div className="w-100 title fw-bold ps-3">
                {title}
            </div>
            {elements.map((element, index) => (
                <div key={"title"+index} className="col-6 text-center d-flex align-items-center animated-border element fw-semibold pt-4">
                    {element}
                </div>
                )
            )}
            <div className="animated-border bottom w-100 fw-semibold text-center d-flex align-items-center pt-4">
                {bottom}
            </div>
        </div>
    )
}


