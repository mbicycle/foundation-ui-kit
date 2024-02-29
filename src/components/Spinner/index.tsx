import Icon from './icon';

type SpinnerProps = {
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'extra-large';
};

const Spinner: React.FC<SpinnerProps> = ({ className = '', size = 'medium' }) => {
  let iconSize = '';
  switch (size) {
    case 'small':
      iconSize = 'w-4 h-4';
      break;
    case 'medium':
      iconSize = 'w-6 h-6';
      break;
    case 'large':
      iconSize = 'w-8 h-8';
      break;
    case 'extra-large':
      iconSize = 'w-10 h-10';
      break;
    default:
      break;
  }

  return (
    <div role="status" className={className}>
      <Icon className={`inline animate-spin text-gray-200 dark:text-gray-600 fill-blue-600 ${iconSize}`} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
