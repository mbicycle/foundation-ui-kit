import { useState } from 'react';

type TooltipProps = {
    content: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
};

const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type="button"
            className="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ position: 'relative' }}
        >
            Default tooltip
            {isHovered && (
                <div
                    role="tooltip"
                    className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700`}
                    style={{
                        [position]: 'calc(100% + 0.5rem)',
                        transform: position === 'right' || position === 'left' ? 'translateY(-50%)' : '',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {content}
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            )}
        </button>
    );
};

export default Tooltip;
