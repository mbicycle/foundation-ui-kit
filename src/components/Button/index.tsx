import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import {AddIcon, ExportIcon} from "components/Button/icon";

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'warning' | 'transparent' | 'empty' | 'outline';

type ButtonProps = {
  children: React.ReactNode;
  isDisabled?: boolean;
  size?: ButtonSize;
  uppercase?: boolean;
  variant?: ButtonVariant;
  isExport?: boolean;
  isAdd?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ToggleProps = {
  checked?: boolean;
  color?: 'blue' | 'red' | 'yellow';
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Button({
                         children,
                         isDisabled = false,
                         size = 'medium',
                         uppercase = false,
                         variant = 'primary',
                         isExport = false,
                         isAdd = false,
                         className = '',
                         ...rest
                       }: ButtonProps) {
  const buttonClasses = {
    base: 'px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300',
    size: getSizeClass(size),
    variant: getVariantClass(variant, isDisabled),
    disabled: isDisabled ? 'cursor-not-allowed pointer-events-none' : '',
  };

  const buttonText = uppercase ? String(children).toUpperCase() : children;
  const IconComponent = isExport ? ExportIcon : (isAdd ? AddIcon : null);

  return (
      <button className={`${Object.values(buttonClasses).join(' ')} ${className}`} disabled={isDisabled} {...rest}>
        {IconComponent && <IconComponent />}
        {buttonText}
      </button>
  );
}

export function Toggle({
                         checked = false,
                         color = 'blue',
                         className = '',
                         ...rest
                       }: ToggleProps) {
  const toggleClasses = {
    base: 'rounded-full px-4 py-2 transition-all duration-300',
    color: getColorClass(color),
  };

  return (
      <input
          type="checkbox"
          checked={checked}
          className={`${Object.values(toggleClasses).join(' ')} ${className}`}
          {...rest}
      />
  );
}

const sizeClasses: Record<ButtonSize, string> = {
  'small': 'text-sm',
  'medium': 'text-md',
  'large': 'text-2xl',
};

const getSizeClass = (size: "small" | "medium" | "large" = "medium"): string => sizeClasses[size] || '';

const variantClasses: Record<ButtonVariant, string> = {
  'primary': 'text-white bg-blue-500 hover:bg-blue-400 active:transform active:scale-95 transition-transform',
  'warning': 'text-white bg-red-500 hover:bg-red-400 active:transform active:scale-95 transition-transform',
  'transparent': 'text-blue-500 hover:bg-blue-100 border border-blue-500 hover:border-blue-400 active:transform active:scale-95 transition-transform',
  'empty': 'text-blue-500 hover:bg-blue-100 active:transform active:scale-95 transition-transform',
  'outline': 'text-white border border-white hover:bg-white-100 active:transform active:scale-95 transition-transform',
};

const getVariantClass = (variant?: "primary" | "warning" | "transparent" | "empty" | "outline", isDisabled?: boolean): string => {
  const baseClass = variant && variantClasses[variant] || '';
  return isDisabled ? `${baseClass} bg-gray-300` : baseClass;
};

const getColorClass = (color: "blue" | "red" | "yellow" | undefined): string => {
  switch (color) {
    case 'blue':
      return 'bg-blue-500 hover:bg-blue-400';
    case 'red':
      return 'bg-red-500 hover:bg-red-400';
    case 'yellow':
      return 'bg-yellow-500 hover:bg-yellow-400';
    default:
      return '';
  }
};
