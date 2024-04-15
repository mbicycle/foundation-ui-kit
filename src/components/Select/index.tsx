import { Listbox, Transition } from "@headlessui/react";

export type Option = {
    id: string
    name: string
}

export interface SelectProps {
    onChange: (value: string | string[]) => void;
    value: string | string[] | null;
    options: Option[];
    multiple?: boolean;
    label?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    required?: boolean;
    placeholder?: string;
    classNameWrapper?: string;
    classNameLabel?: string;
    classNameInput?: string;
    classNameListOption?: string;
}

const Select = ({
                    onChange,
                    value,
                    options,
                    multiple,
                    label,
                    placeholder = "Select",
                    classNameWrapper = '',
                    classNameLabel = '',
                    classNameInput = '',
                    classNameListOption = '',
                    ...props
                }: SelectProps) => {

    const selectedItem = options.find((item) => item.id === value);

    return (
        <div className={`relative w-full ${classNameWrapper}`}>
            {label && (
                <label htmlFor={props.id} className={`block mb-2 text-sm font-medium text-gray-900 ${classNameLabel}`}>
                    {label}
                </label>
            )}
            <Listbox
                {...props}
                as="div"
                className="space-y-1"
                value={value || null}
                onChange={onChange}
                multiple={multiple}
            >
                {({ open }) => (
                    <div className="relative">
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button
                    className={`
                    bg-transparent border text-gray-900 rounded-lg block w-full p-2.5 resize-none
                focus:ring-blue-500 focus:border-blue-500
                disabled:bg-gray-100 autofill:bg-transparent text-left ${classNameInput}`}
                >
                  <span className="block truncate">
                    {(Array.isArray(value) ? `Selected: ${value.length || 0}` : selectedItem?.name) || placeholder}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                    >
                      <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
              </span>

                        <Transition
                            unmount={false}
                            show={open}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="absolute z-40 mt-1 w-full rounded-md bg-white shadow-lg"
                        >
                            <Listbox.Options
                                static
                                className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none"
                            >
                                {options.map((item) => (
                                    <Listbox.Option key={item.id} value={item.id}>
                                        {({ active, selected }) => (
                                            <div
                                                className={`${
                                                    active
                                                        ? 'text-white bg-blue-600'
                                                        : 'text-gray-900'
                                                } cursor-default select-none relative py-2 pl-8 pr-4 ${classNameListOption}`}
                                            >
                          <span
                              className={`${
                                  selected ? 'font-semibold' : 'font-normal'
                              } block truncate`}
                          >
                            {item.name}
                          </span>
                                                {selected && (
                                                    <span
                                                        className={`${
                                                            active ? 'text-white' : 'text-blue-600'
                                                        } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                    >
                              <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                              >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                              </svg>
                            </span>
                                                )}
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>
    );
};

export default Select;
