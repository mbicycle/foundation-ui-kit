type TextProps = {
    variant?: string;
    children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ variant = '', children }) => {
    const variants = {
        'heading-two': 'text-2xl font-bold',
        'heading-three': 'text-xl font-bold',
        'heading-four': 'text-lg font-bold',
        'heading-five': 'text-base font-bold',
        'heading-six': 'text-sm font-bold',
        'body-large': 'text-lg',
        'body-medium': 'text-base',
        'body-small': 'text-sm',
        'body-micro': 'text-xs',
        'number-large': 'text-lg font-semibold',
        'number-medium': 'text-base font-semibold',
        'number-small': 'text-sm font-semibold',
        'number-micro': 'text-xs font-semibold',
    };

    const textStyle = variant ? variants[variant] : '';

    return <span className={textStyle}>{children}</span>;
};

export default Text;

