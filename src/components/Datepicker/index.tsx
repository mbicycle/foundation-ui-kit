import { ForwardedRef, forwardRef } from "react"
import DatePicker, { ReactDatePickerProps } from "react-datepicker"
import { Input, InputProps } from "components/Input"
import { CalendarDaysIcon } from "@heroicons/react/24/solid"

import "react-datepicker/dist/react-datepicker.css"

export type DatepickerProps = {
  label?: string
  inputClasses?: string
  wrapperClasses?: string
  helperText?: string
  helperTextClassName?: string
  error?: boolean
  inputProps?: InputProps
} & ReactDatePickerProps

const Datepicker = forwardRef(
  (
    {
      selected,
      onChange,
      label,
      inputClasses = "",
      wrapperClasses = "",
      helperText,
      helperTextClassName = "",
      error,
      inputProps,
      ...rest
    }: DatepickerProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const renderMonthContent = (_: number, shortMonthText: string, fullMonthText: string): React.ReactNode => {
      const tooltipText = fullMonthText
      return (
        <span title={tooltipText} className="p-2">
          {shortMonthText}
        </span>
      )
    }

    return (
      <div className={`${wrapperClasses}`}>
        {label && <label className="mb-2 block text-sm font-medium text-gray-900">{label}</label>}
        <DatePicker
          selected={selected}
          onChange={onChange}
          customInput={
            <Input
              value={selected?.toString()}
              type="text"
              inputClasses={inputClasses}
              placeholder="Enter Date"
              icon={<CalendarDaysIcon className="size-6 text-gray-600" />}
              ref={ref}
              error={error}
              {...inputProps}
            />
          }
          renderMonthContent={renderMonthContent}
          closeOnScroll={true}
          {...rest}
        />
        {helperText && (
          <span
            className={`mt-1 block text-sm text-gray-500 
                ${error ? "text-red-500" : "text-gray-500"}
                 ${helperTextClassName}`}
          >
            {helperText}
          </span>
        )}
      </div>
    )
  },
)

export default Datepicker
