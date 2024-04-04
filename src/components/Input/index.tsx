import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'tel' | 'url' | 'email' | 'password' | 'number';
    id?: string;
    label?: string;
    placeholder?: string;
    inputClasses?: string;
    wrapperClasses?: string;
    multiline?: boolean;
    helperText?: string;
    helperTextClassName?: string;
    error?: string; // Добавляем prop для ошибки
}

export function Input({
                          type,
                          id,
                          label,
                          placeholder,
                          inputClasses = '',
                          wrapperClasses = '',
                          multiline = false,
                          helperText,
                          helperTextClassName = '',
                          error,
                          ...rest
                      }: InputProps) {
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
                id={id}
                className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClasses}`}
                placeholder={placeholder}
                required
                {...rest}
            />
            {error && (
                <span className="block mt-1 text-sm text-red-500">{error}</span>
            )}
            {helperText && !error && (
                <span className={`block mt-1 text-sm text-gray-500 ${helperTextClassName}`}>{helperText}</span>
            )}
        </div>
    );
}
