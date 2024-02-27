import type { ButtonHTMLAttributes } from 'react';

import { AddIcon, ExportIcon } from './icon';

type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  uppercase?: boolean;
  variant?: 'primary' | 'warning' | 'transparent' | 'empty' | 'outline';
  isExport?: boolean;
  isAdd?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
  const {
    variant = 'primary', isDisabled, isExport, isAdd, ...rest
  } = props;

  const buttonClasses = `
    px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 
    ${getSizeClasses(props.size)}
    ${getVariantClasses(variant, isDisabled)}
    ${isDisabled ? 'cursor-not-allowed' : ''}
    ${isDisabled ? 'pointer-events-none' : ''}
  `;

  const buttonText = props.uppercase
    ? String(props.children).toUpperCase()
    : props.children;

  const IconComponent = isExport ? ExportIcon : (isAdd ? AddIcon : null);

  return (
    <button className={buttonClasses} disabled={isDisabled} {...rest}>
      {IconComponent && (
        <IconComponent />
      )}
      {buttonText}
    </button>
  );
}

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

const getVariantClasses = (variant: string, isDisabled?: boolean | undefined) => {
  switch (variant) {
    case 'primary':
      return `
        text-white 
        ${isDisabled ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-400 active:transform active:scale-95'}
        transition-transform
      `;
    case 'warning':
      return `
        text-white
        ${isDisabled ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-400 active:transform active:scale-95'}
        transition-transform
      `;
    case 'transparent':
      return `
        text-blue-500 
        ${isDisabled ? 'bg-gray-300' : 'hover:bg-blue-100 border border-blue-500 hover:border-blue-400 active:transform active:scale-95'}
        transition-transform
      `;
    case 'empty':
      return `
        text-blue-500 
        ${isDisabled ? 'bg-gray-300' : 'hover:bg-blue-100 active:transform active:scale-95'}
        transition-transform
      `;
    case 'outline':
      return `
        text-white border border-white hover:bg-white-100 // Изменено на белый цвет текста и бордеров
        ${isDisabled ? 'bg-gray-300' : 'active:transform active:scale-95'}
        transition-transform
      `;
    default:
      return '';
  }
};
