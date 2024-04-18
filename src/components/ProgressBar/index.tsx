import React from "react"

export type ComponentWithClassProps = {
  className?: string
}

type ProgressBarProps = {
  progress: number
  size?: "small" | "default" | "large" | "extra-large"
} & ComponentWithClassProps

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, size = "default", className = "" }) => {
  let barHeight
  switch (size) {
    case "small":
      barHeight = "h-1.5"
      break
    case "large":
      barHeight = "h-4"
      break
    case "extra-large":
      barHeight = "h-6"
      break
    default:
      barHeight = "h-2.5"
      break
  }

  return (
    <div className={`w-full rounded-full bg-gray-200 ${barHeight} ${className}`}>
      <div className={`rounded-full bg-blue-600 ${barHeight}`} style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ProgressBar
