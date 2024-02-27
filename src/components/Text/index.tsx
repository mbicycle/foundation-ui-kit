type TextProps = {
    variant?: string;
    children: React.ReactNode;
};

type Variants = {
    'heading-two': string;
    'heading-three': string;
    'heading-four': string;
    'heading-five': string;
    'heading-six': string;
    'body-large': string;
    'body-medium': string;
    'body-small': string;
    'body-micro': string;
    'number-large': string;
    'number-medium': string;
    'number-small': string;
    'number-micro': string;
};

const Text: React.FC<TextProps> = ({ variant = '', children }) => {
  const variants: Variants = {
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

  const textStyle = variant && variants[variant as keyof Variants] ? variants[variant as keyof Variants] : '';

  return <span className={textStyle}>{children}</span>;
};

export default Text;
