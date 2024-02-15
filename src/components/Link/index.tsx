import { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, ...rest }: LinkProps) => {
    return (
        <a className="text-blue-500 hover:text-blue-700" {...rest}>
            {children}
        </a>
    );
};

export default Link;

