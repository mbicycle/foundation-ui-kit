import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import React from "react"
import { stringTrim } from "utils/stringTrim"

export type AccordionBodyProps = {
  children: React.ReactNode
  className?: string
}

export type AccordionTitleProps = {
  children: React.ReactNode
  open?: boolean
  className?: string
  classNameIcon?: string
}

export type AccordionProps = {
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

type Extensions = {
  Title: (props: AccordionTitleProps) => JSX.Element
  Body: (props: AccordionBodyProps) => JSX.Element
}

export const Title = ({ children, className = "", classNameIcon = "" }: AccordionTitleProps) => {
  return (
    <Disclosure.Button className="w-full">
      {({ open }) => (
        <div
          className={stringTrim(`flex w-full items-center justify-between px-8 py-4 text-left text-sm font-medium 
                ${open ? " rounded-t-lg border-x border-t " : " rounded-lg border shadow "} 
                ${className}
                `)}
        >
          {children}
          <ChevronDownIcon
            className={stringTrim(`${open ? "rotate-180 transform" : ""} size-6 text-gray-700 ${classNameIcon}`)}
          />
        </div>
      )}
    </Disclosure.Button>
  )
}

export const Body = ({ children, className = "" }: AccordionBodyProps) => {
  return (
    <Disclosure.Panel
      className={stringTrim(`rounded-b-lg border-x border-b px-4 pb-2 pt-4 text-sm text-gray-500 shadow ${className}`)}
    >
      {children}
    </Disclosure.Panel>
  )
}

const Accordion: React.FC<AccordionProps> & Extensions = ({ children, defaultOpen = false }) => {
  return (
    <Disclosure as="div" defaultOpen={defaultOpen}>
      {children}
    </Disclosure>
  )
}

Accordion.Title = Title
Accordion.Body = Body

export default Accordion
