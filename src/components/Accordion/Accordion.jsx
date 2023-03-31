import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="border-b">
            <button
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={toggleAccordion}
            >
                <span>{title}</span>
                <span className="ml-6">{isActive ? '-' : '+'}</span>
            </button>
            <div
                className={`${isActive ? 'block' : 'hidden'
                    } px-4 py-2 leading-relaxed`}
            >
                {content}
            </div>
        </div>
    );
};

export default Accordion;
