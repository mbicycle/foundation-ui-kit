import { useState } from 'react';

export type AccordionProps = {
    items: { heading: string; content: React.ReactNode }[];
    className?: string;
};

const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`accordion ${className}`}>
            {items.map((item, index) => (
                <div key={index} id={`accordion-collapse-${index + 1}`} data-accordion="collapse">
                    <h2 id={`accordion-collapse-heading-${index + 1}`}>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 ${
                                index === 0 ? '' : 'border-t-0'
                            } ${activeIndex === index ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3`}
                            data-accordion-target={`#accordion-collapse-body-${index + 1}`}
                            aria-expanded={activeIndex === index ? 'true' : 'false'}
                            aria-controls={`accordion-collapse-body-${index + 1}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.heading}</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 rotate-${activeIndex === index ? '180' : '0'} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-collapse-body-${index + 1}`}
                        className={`p-5 border border-gray-200 dark:border-gray-700 ${
                            activeIndex === index ? '' : 'hidden'
                        }`}
                        aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
