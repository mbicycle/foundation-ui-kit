import {ForwardedRef, forwardRef, InputHTMLAttributes, RefObject} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    type?: 'text' | 'tel' | 'url' | 'email' | 'password' | 'number';
    icon?: React.ReactNode;
    label?: string;
    inputClasses?: string;
    wrapperClasses?: string;
    multiline?: boolean;
    helperText?: string;
    helperTextClassName?: string;
    error?: boolean;
}

export const Input = forwardRef(({
                                     id,
                                     label,
                                     icon,
                                     helperText,
                                     error,
                                     type = 'text',
                                     multiline = false,
                                     inputClasses = '',
                                     wrapperClasses = '',
                                     helperTextClassName = '',
                                     ...rest
                                 }: InputProps, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
    const InputComponent = multiline ? 'textarea' : 'input';

    return (
        <div className={`relative  ${wrapperClasses}`}>
            {label && (
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                    {label}
                </label>
            )}
            {icon &&
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {icon}
                </div>}
            <InputComponent
                type={type}
                {...rest}
                className={`${error ? 'border-red-500' : 'border-gray-300'} 
                bg-transparent border text-gray-900 rounded-lg block w-full p-2.5 resize-none 
                focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                disabled:bg-gray-100 disabled:text-gray-400 autofill:bg-transparent 
                ${multiline ? " min-h-28" : ""}
                ${icon ? " ps-12" : ""}
                ${inputClasses}`}
                ref={ref as RefObject<HTMLTextAreaElement> & RefObject<HTMLInputElement>}
            />
            {helperText && (
                <span className={`absolute block mt-1 text-sm text-gray-500 
                ${error ? " text-red-500" : " text-gray-500"}
                 ${helperTextClassName}`}
                >
                  {helperText}
                </span>
            )}
        </div>
    );
})