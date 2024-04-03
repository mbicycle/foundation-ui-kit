import { InputHTMLAttributes } from 'react';

export type InputProps = {
    type?: 'text' | 'tel' | 'url' | 'email' | 'password' | 'number';
    id?: string;
    label?: string;
    placeholder?: string;
    inputClasses?: string;
    wrapperClasses?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
                          type,
                          id,
                          label,
                          placeholder,
                          inputClasses = '',
                          wrapperClasses = '',
                          ...rest
                      }: InputProps) {
    return (
        <div className={`${wrapperClasses}`}>
            {label && (
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClasses}`}
                placeholder={placeholder}
                required
                {...rest}
            />
        </div>
    );
}
