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


export const Title = ({open = false, children, className = ''}: AccordionTitleProps) => {
    return (
      <Disclosure.Button
        className={`flex w-full justify-between px-8 py-4 text-left text-sm font-medium 
        ${open ? 'rounded-t-lg border-t border-x' : 'rounded-lg border shadow'}
        ${className}
        `}
      >
          {children}
          <ExpandMoreIcon
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-gray-700`}
          />
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


    const childrenWithProps = (open: boolean) =>
      React.Children.map(children,
        (el) => React.isValidElement(el)
          // @ts-ignore
          ? React.cloneElement(el, { open })
          : el)

    return (
          <Disclosure defaultOpen={defaultOpen}>
              {({ open }) => (
                <>
                    {childrenWithProps(open)}
                </>
              )}
          </Disclosure>
    );
};

Accordion.Title = Title
Accordion.Body = Body

export default Accordion;
