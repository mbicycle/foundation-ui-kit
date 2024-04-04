import { useState } from 'react';

export type TooltipProps = {
    content: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
};

const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top', className = '', children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const combinedClassName = `${className} relative`;

    return (
        <div className={combinedClassName} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isHovered && (
                <div
                    role="tooltip"
                    className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-sm tooltip"
                    style={{
                        [position]: 'calc(100% + 0.5rem)',
                        transform: position === 'right' || position === 'left' ? 'translateY(-50%)' : '',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {content}
                    <div className="tooltip-arrow" data-popper-arrow />
                </div>
            )}
        </div>
    );
};

export default Tooltip;
