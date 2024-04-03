import {InputHTMLAttributes} from 'react';

export type ToggleProps = {
    text?: string;
    color?: 'blue' | 'red' | 'yellow';
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Toggle({  text, color, className, ...rest }: ToggleProps) {

    let toggleColor: string;
    switch (color) {
        case 'red':
            toggleColor = 'bg-red-600 peer-checked:bg-red-600';
            break;
        case 'blue':
            toggleColor = 'bg-blue-600 peer-checked:bg-blue-600';
            break;
        case 'yellow':
            toggleColor = 'bg-yellow-400 peer-checked:bg-yellow-400';
            break;
        default:
            toggleColor = 'bg-blue-600 peer-checked:bg-blue-600';
            break;
    }

    const combinedClassName = `${className} relative inline-flex items-center me-5 cursor-pointer`.trim();

    return (
        <label className={combinedClassName}>
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                {...rest}
            />
            <div
                className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:${toggleColor}`}
            />
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{text}</span>
        </label>
    );
}

export default Toggle;
