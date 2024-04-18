import React, { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, TrashIcon } from "@heroicons/react/24/solid"

export type CardProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  showMoveIcon?: boolean
  showDeleteIcon?: boolean
  isSkills?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  showMoveIcon = true,
  showDeleteIcon = true,
  isSkills,
  className = "",
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleExpand = () => {
    if (!isSkills) return
    setIsExpanded(!isExpanded)
  }

  const stopPropagationDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  const stopPropagationSelect = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={`rounded-md border border-gray-300 p-4 shadow-lg ${isExpanded ? "h-auto" : "h-20 overflow-hidden"} ${className}`}
      onClick={handleToggleExpand}
      {...rest}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {showMoveIcon && (
            <div className="mr-3 flex-shrink-0 transform cursor-pointer text-gray-500 transition-all duration-300 hover:grayscale">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
          )}
          <div>
            <h3 className="text-ubuntu-title text-lg font-bold">{title}</h3>
            {subtitle && <div className="text-ubuntu-subtitle text-xs">{subtitle}</div>}
          </div>
        </div>
        {showDeleteIcon && (
          <div className="flex items-center">
            <div className=" w-14 flex-shrink-0 transform cursor-pointer text-blue-500 transition-all duration-300 hover:grayscale">
              <TrashIcon className="h-7 w-7" />
            </div>
            {isSkills && (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                className="w-6 flex-shrink-0 transform cursor-pointer transition-all duration-300 hover:grayscale"
                style={{ marginTop: "5px" }}
                onClick={stopPropagationDiv}
              >
                {isExpanded ? (
                  <ChevronUpIcon className="h-auto w-full rotate-180 transform transition-transform duration-300" />
                ) : (
                  <ChevronDownIcon className="h-auto w-full transition-transform duration-300" />
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
              className="mt-1/3 block h-12 w-full rounded-md border border-gray-300 pl-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                className="mt-1/3 block h-12 w-full rounded-md border border-gray-300 pl-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                className="mt-1/3 block h-12 w-full rounded-md border border-gray-300 pl-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Time used (years)"
                onClick={stopPropagationDiv}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
