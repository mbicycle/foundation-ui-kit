import {InputHTMLAttributes} from 'react';

export type ToggleProps = {
    label?: string;
    color?: 'blue' | 'red' | 'yellow';
    className?: string;
    classNameWrapper?: string;
    classNameLabel?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Toggle({ label, color, className = '', classNameWrapper = '', classNameLabel = '', ...rest }: ToggleProps) {

    let toggleColor: string;
    switch (color) {
        case 'red':
            toggleColor = 'peer-checked:bg-red-600';
            break;
        case 'blue':
            toggleColor = 'peer-checked:bg-blue-600';
            break;
        case 'yellow':
            toggleColor = 'peer-checked:bg-yellow-400';
            break;
        default:
            toggleColor = 'peer-checked:bg-blue-600';
            break;
    }

    const combinedClassName = `relative inline-flex items-center cursor-pointer ${classNameWrapper}`;

    return (
        <label className={combinedClassName}>
            <input
                type="checkbox"
                className="sr-only peer"
                {...rest}
            />
            <div
                className={`w-11 h-6 bg-gray-200 rounded-full 
                peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full 
                rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white 
                after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                ${toggleColor} ${className}`}
            />
            {label && <span className={`ms-3 text-sm font-medium text-gray-900 ${classNameLabel}`}>{label}</span>}
        </label>
    );
}

export default Toggle;
