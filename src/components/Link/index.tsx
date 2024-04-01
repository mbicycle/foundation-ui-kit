import { AnchorHTMLAttributes } from 'react';

type LinkProps = {
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({ children, className = '', ...rest }: LinkProps) {
  return (
      <a className={`text-blue-500 hover:text-blue-700 ${className}`} {...rest}>
        {children}
      </a>
  );
}

export default Link;
