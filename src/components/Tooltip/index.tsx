import { useState } from 'react';

export type TooltipProps = {
    content: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    classNameWrapper?: string;
    classNameContent?: string;
    children: JSX.Element
};

// TODO: fix arrow
const Tooltip: React.FC<TooltipProps> = ({
                                             content, position = 'top',
                                             classNameWrapper = '',
                                             classNameContent = '',
                                             children
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const combinedClassName = `${classNameWrapper} relative`;

    return (
        <div className={combinedClassName} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isHovered && (
                <div
                    role="tooltip"
                    className={`absolute z-20 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-sm tooltip max-w-[300px] ${classNameContent}`}
                    style={{
                        [position]: 'calc(100% + 0.5rem)',
                        transform: position === 'right' || position === 'left' ? 'translateY(-50%)' : '',
                    }}
                >
                    {content}
                  <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px"
                       viewBox="0 0 255 255" xmlSpace="preserve">
                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
                  </svg>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
