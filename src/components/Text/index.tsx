import React from 'react';

type ComponentWithClassProps = {
    className?: string;
};

type TextVariant = 'heading-two' | 'heading-three' | 'heading-four' | 'heading-five' | 'heading-six' |
    'body-large' | 'body-medium' | 'body-small' | 'body-micro' | 'number-large' | 'number-medium' |
    'number-small' | 'number-micro';

type TextProps = {
    variant?: TextVariant;
    children: React.ReactNode;
} & ComponentWithClassProps;

const textVariants: Record<TextVariant, string> = {
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

const Text: React.FC<TextProps> = ({ variant, children, className }: {variant?: TextVariant, children: any, className?: string}) => {
    const textStyle = (variant && textVariants[variant]) || '';

    const combinedClassName = `${className} ${textStyle}`.trim();

    return <span className={combinedClassName}>{children}</span>;
};

export default Text;
