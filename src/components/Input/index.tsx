import { ForwardedRef, forwardRef, InputHTMLAttributes, RefObject } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: "text" | "tel" | "url" | "email" | "password" | "number"
  icon?: React.ReactNode
  label?: string
  inputClasses?: string
  wrapperClasses?: string
  multiline?: boolean
  helperText?: string
  helperTextClassName?: string
  error?: boolean
}

export const Input = forwardRef(
  (
    {
      id,
      label,
      icon,
      helperText,
      error,
      type = "text",
      multiline = false,
      inputClasses = "",
      wrapperClasses = "",
      helperTextClassName = "",
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const InputComponent = multiline ? "textarea" : "input"

    return (
      <div className={`relative  ${wrapperClasses}`}>
        {label && (
          <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        {icon && <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">{icon}</div>}
        <InputComponent
          type={type}
          {...rest}
          className={`${error ? "border-red-500" : "border-gray-300"} 
                block w-full resize-none rounded-lg border bg-transparent p-2.5 text-gray-900 
                autofill:bg-transparent focus:border-blue-500 focus:outline-none 
                focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400 
                ${multiline ? " min-h-28" : ""}
                ${icon ? " ps-12" : ""}
                ${inputClasses}`}
          ref={ref as RefObject<HTMLTextAreaElement> & RefObject<HTMLInputElement>}
        />
        {helperText && (
          <span
            className={`absolute mt-1 block text-sm text-gray-500 
                ${error ? " text-red-500" : " text-gray-500"}
                 ${helperTextClassName}`}
          >
            {helperText}
          </span>
        )}
      </div>
    )
  },
)
