type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  uppercase?: boolean;
  variant?: 'primary' | 'warning' | 'transparent' | 'empty' | string;
};

export const Button = (props: Props) => {
  const { variant = 'primary' } = props;

  const buttonClasses = `
    px-4 py-2 rounded-md transition-colors 
    ${getSizeClasses(props.size)}
    ${getVariantClasses(variant)}
  `;

  const buttonText = props.uppercase
      ? String(props.children).toUpperCase()
      : props.children;

  return (
      <button className={buttonClasses} disabled={props.isDisabled}>
        {buttonText}
      </button>
  );
};

const getSizeClasses = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 'text-sm';
    case 'medium':
      return 'text-md';
    case 'large':
      return 'text-2xl';
    default:
      return '';
  }
};

const getVariantClasses = (variant: 'primary' | 'warning' | 'transparent' | 'empty' | string) => {
  switch (variant) {
    case 'primary':
      return 'text-white bg-blue-500 hover:bg-blue-400 active:transform active:scale-95 transition-transform';
    case 'warning':
      return 'text-white bg-red-500 hover:bg-red-400 active:transform active:scale-95 transition-transform';
    case 'transparent':
      return 'text-blue-500 hover:bg-blue-100 border border-blue-500 hover:border-blue-400 active:transform active:scale-95 transition-transform';
    case 'empty':
      return 'text-blue-500 hover:bg-blue-100 active:transform active:scale-95 transition-transform';
    default:
      return '';
  }
};

