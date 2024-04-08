import { Disclosure } from "@headlessui/react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";


export type AccordionBodyProps = {
    children: React.ReactNode,
    className?: string
}

export type AccordionTitleProps = {
    children: React.ReactNode,
    open?: boolean,
    className?: string
    classNameIcon?: string
}

export type AccordionProps = {
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
};

type Extensions = {
    Title: (props: AccordionTitleProps) => JSX.Element,
    Body: (props: AccordionBodyProps) => JSX.Element,
}


export const Title = ({children, className = '', classNameIcon = ''}: AccordionTitleProps) => {
    return (
      <Disclosure.Button className="w-full">
          {({ open }) => (
            <div className={
                `flex w-full justify-between items-center px-8 py-4 text-left text-sm font-medium 
                ${open ? 'rounded-t-lg border-t border-x' : 'rounded-lg border shadow'} 
                ${className}
                `}>
                {children}
                <ExpandMoreIcon
                  className={`${open ? 'rotate-180 transform' : ''} size-8 text-gray-700 ${classNameIcon}`}
                />
            </div>
          )}
      </Disclosure.Button>
    )
}


export const Body = ({children, className = ''}: AccordionBodyProps) => {
    return (
      <Disclosure.Panel
        className={`px-4 pb-2 pt-4 text-sm text-gray-500 rounded-b-lg border-b border-x shadow ${className}`}>
          {children}
      </Disclosure.Panel>
    )
}

const Accordion: React.FC<AccordionProps> & Extensions = ({ children, defaultOpen = false }) => {
    return (
          <Disclosure defaultOpen={defaultOpen}>
              {children}
          </Disclosure>
    );
};

Accordion.Title = Title
Accordion.Body = Body

export default Accordion;
