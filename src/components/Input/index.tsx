import { ForwardedRef, forwardRef, InputHTMLAttributes, RefObject } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement > {
    type?: 'text' | 'tel' | 'url' | 'email' | 'password' | 'number';
    label?: string;
    inputClasses?: string;
    wrapperClasses?: string;
    multiline?: boolean;
    helperText?: string;
    helperTextClassName?: string;
    error?: boolean;
}

export const Input = forwardRef(({
                          type,
                          id,
                          label,
                          inputClasses = '',
                          wrapperClasses = '',
                          multiline = false,
                          helperText,
                          helperTextClassName = '',
                          error,
                          ...rest
                      }: InputProps, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
    const InputComponent = multiline ? 'textarea' : 'input';

    return (
        <div className={`${wrapperClasses}`}>
            {label && (
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                    {label}
                </label>
            )}
            <InputComponent
                type={type}
                className={`${error ? 'border-red-500' : 'border-gray-300'} 
                bg-transparent border text-gray-900 rounded-lg block w-full p-2.5 resize-none
                focus:ring-blue-500 focus:border-blue-500
                disabled:bg-gray-100 autofill:bg-transparent
                ${multiline ? "min-h-28" : ""}
                ${inputClasses}`}
                {...rest}
                ref={ref as RefObject<HTMLTextAreaElement> & RefObject<HTMLInputElement>}
            />
            {helperText && (
                <span className={`block mt-1 text-sm text-gray-500 
                ${error ? "text-red-500" : "text-gray-500"}
                 ${helperTextClassName}`}
                >
                  {helperText}
                </span>
            )}
        </div>
    );
})