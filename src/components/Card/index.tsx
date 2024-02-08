type CardProps = {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showMoveIcon?: boolean;
    showDeleteIcon?: boolean;
    onCardClick?: () => void;
    onDelete?: () => void;
};

export const Card: React.FC<CardProps> = ({ title, subtitle, showMoveIcon = true, showDeleteIcon = true, onCardClick, onDelete, }) => (
    <div className="shadow-lg p-4 rounded-md border border-gray-300" onClick={onCardClick}>
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
                {showMoveIcon && (
                    <div
                        className="mr-3 flex-shrink-0 w-4 transition-all duration-300 transform hover:grayscale cursor-pointer"
                        onClick={onCardClick}
                    >
                        <img src="src/common/icons/Dots.svg" alt="Move Icon" className="w-full h-auto" />
                    </div>
                )}
                <div>
                    <h3 className="font-bold text-ubuntu-title text-lg">{title}</h3>
                    {subtitle && <div className="text-xs text-ubuntu-subtitle">{subtitle}</div>}
                </div>
            </div>
            {showDeleteIcon && (
                <div
                    className="mr-3 flex-shrink-0 w-6 transition-all duration-300 transform hover:grayscale cursor-pointer"
                    onClick={onDelete}
                >
                    <img src="src/common/icons/Garbage.svg" alt="Delete Icon" className="w-full h-auto" />
                </div>
            )}
        </div>
    </div>
);
