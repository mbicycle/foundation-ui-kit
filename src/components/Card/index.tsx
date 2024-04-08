import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@heroicons/react/24/solid';

export type CardProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  showMoveIcon?: boolean;
  showDeleteIcon?: boolean;
  isSkills?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({title,
                                            subtitle,
                                            showMoveIcon = true,
                                            showDeleteIcon = true,
                                            isSkills,
                                            className = '',
                                            ...rest
                                          }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    if (!isSkills) return;
    setIsExpanded(!isExpanded);
  };

  const stopPropagationDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const stopPropagationSelect = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
      <div
          className={`shadow-lg p-4 rounded-md border border-gray-300 ${isExpanded ? 'h-auto' : 'h-20 overflow-hidden'} ${className}`}
          onClick={handleToggleExpand}
          {...rest}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {showMoveIcon && (
                <div
                    className="text-gray-500 mr-3 flex-shrink-0 transition-all duration-300 transform hover:grayscale cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
            )}
            <div>
              <h3 className="font-bold text-ubuntu-title text-lg">{title}</h3>
              {subtitle && <div className="text-xs text-ubuntu-subtitle">{subtitle}</div>}
            </div>
          </div>
          {showDeleteIcon && (
            <div className="flex items-center">
              <div
                className=" flex-shrink-0 w-14 transition-all duration-300 transform hover:grayscale cursor-pointer text-blue-500"
                >
                  <TrashIcon className="w-7 h-7" />
                </div>
                {isSkills && (
                    <div
                        className="flex-shrink-0 w-6 transition-all duration-300 transform hover:grayscale cursor-pointer"
                        style={{ marginTop: '5px' }}
                        onClick={stopPropagationDiv}
                    >
                      {isExpanded ? (
                          <ChevronUpIcon className="w-full h-auto transform rotate-180 transition-transform duration-300" />
                      ) : (
                          <ChevronDownIcon className="w-full h-auto transition-transform duration-300" />
                      )}
                    </div>
                )}
              </div>
          )}
        </div>
        {isExpanded && isSkills && (
            <div className="mt-4 space-y-2">
              <div>
                <label htmlFor="skill" className="text-sm text-gray-600">
                  Skill
                </label>
                <input
                    id="skill"
                    type="text"
                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1/3 h-12 pl-2"
                    placeholder="Skill"
                    onClick={stopPropagationDiv}
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label htmlFor="level" className="text-sm text-gray-600">
                    Level
                  </label>
                  <select
                      id="level"
                      className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1/3 h-12 pl-2"
                      onClick={stopPropagationSelect}
                  >
                    <option value="Basic Knowledge">Basic Knowledge</option>
                    <option value="Limited Experience">Limited Experience</option>
                    <option value="Competent">Competent</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label htmlFor="time" className="text-sm text-gray-600">
                    Time used (years)
                  </label>
                  <input
                      id="time"
                      type="number"
                      step="0.5"
                      className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1/3 h-12 pl-2"
                      placeholder="Time used (years)"
                      onClick={stopPropagationDiv}
                  />
                </div>
              </div>
            </div>
        )}
      </div>
  );
};
