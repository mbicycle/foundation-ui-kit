import { Combobox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid"
import { ForwardedRef, forwardRef, Fragment, useMemo, useState } from "react"
import { stringTrim } from "utils/stringTrim"

export type Option = {
  id: string
  name: string
}

export interface AutocompleteSelectProps {
  value: string
  options: Option[]
  onChange: (value: string) => void
  filteredOptions?: Option[]
  label?: string
  placeholder?: string
  id?: string
  name?: string
  required?: boolean
  classNameWrapper?: string
  classNameLabel?: string
  classNameInput?: string
  classNameListOption?: string
}

const AutocompleteSelect = forwardRef(
  (
    {
      onChange,
      value,
      options,
      label,
      filteredOptions,
      placeholder = "Select",
      classNameWrapper = "",
      classNameLabel = "",
      classNameInput = "",
      classNameListOption = "",
    }: AutocompleteSelectProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [query, setQuery] = useState("")

    const filteredOptionsArray = useMemo(
      () =>
        filteredOptions || query === ""
          ? options
          : options.filter((item) =>
              item.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")),
            ),
      [filteredOptions, query, options],
    )

    return (
      <div className={`w-full ${classNameWrapper}`}>
        {label && <p className={`mb-2 block text-sm  font-medium text-gray-900 ${classNameLabel}`}>{label}</p>}
        <Combobox value={value} onChange={onChange}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden">
              <Combobox.Input
                ref={ref}
                className={stringTrim(`w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-left 
                          transition duration-150 ease-in-out 
                          focus:border-blue-500 focus:outline-none focus:ring-blue-500 
                          disabled:bg-gray-100 disabled:text-gray-400 
                          ${classNameInput}
                          `)}
                displayValue={(selectedId: string) => {
                  const selectedValue = options.find((item) => item.id === selectedId)
                  return selectedValue?.name || placeholder
                }}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options
                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1
                text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
              >
                {filteredOptionsArray.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">Nothing found.</div>
                ) : (
                  filteredOptionsArray.map((item) => (
                    <Combobox.Option
                      key={item.id}
                      className={({ active }) =>
                        stringTrim(`relative cursor-default select-none py-2 pl-10 pr-4
                        ${active ? " bg-blue-500 text-white " : " text-gray-900 "} 
                        ${classNameListOption}`)
                      }
                      value={item.id}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={stringTrim(
                              `block truncate text-base ${selected ? "font-semibold" : "font-normal"}`,
                            )}
                          >
                            {item.name}
                          </span>
                          {selected ? (
                            <span
                              className={stringTrim(`absolute inset-y-0 left-0 flex items-center pl-3 
                              ${active ? " text-white " : " text-blue-600 "}`)}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    )
  },
)

export default AutocompleteSelect
