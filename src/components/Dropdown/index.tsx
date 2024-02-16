import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from './icon';

interface DropdownInputProps {
    options: string[];
    placeholder?: string;
}

const DropdownInput: React.FC<DropdownInputProps> = ({ options, placeholder }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                onFocus={toggleDropdown}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={placeholder || "Select an option..."}
            />
            <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none transition-transform duration-300"
            >
                {isDropdownOpen ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-400 transform rotate-180" />
                ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                )}
            </span>
            {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownInput;
