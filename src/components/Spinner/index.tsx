import Icon from "./icon"

export type SpinnerProps = {
  className?: string
  size?: "small" | "medium" | "large" | "extra-large"
}

const Spinner: React.FC<SpinnerProps> = ({ className = "", size = "medium" }) => {
  let iconSize = ""
  switch (size) {
    case "small":
      iconSize = "w-4 h-4"
      break
    case "medium":
      iconSize = "w-6 h-6"
      break
    case "large":
      iconSize = "w-8 h-8"
      break
    case "extra-large":
      iconSize = "w-10 h-10"
      break
    default:
      break
  }

  return (
    <div role="status" className={`spinner ${className}`}>
      <Icon className={`inline animate-spin fill-blue-600 text-gray-200 dark:text-gray-600 ${iconSize}`} />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
