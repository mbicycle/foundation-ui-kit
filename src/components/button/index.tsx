type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  uppercase?: boolean;
};

export const Button = (props: Props) => {
  const buttonClasses = `px-4 py-2 text-xl text-white rounded-md transition-colors ${
      props.isDisabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-400'
  } ${getSizeClasses(props.size)}`;

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
