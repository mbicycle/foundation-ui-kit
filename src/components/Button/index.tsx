import { ButtonHTMLAttributes } from "react"
import { SpinnerIcon } from "components/Button/icon"
import { stringTrim } from "utils/stringTrim"

type ButtonSize = "small" | "medium" | "large"
type ButtonVariant = "primary" | "warning" | "transparent" | "empty" | "outline"

export type ButtonProps = {
  children: React.ReactNode
  icon?: React.ElementType
  size?: ButtonSize
  variant?: ButtonVariant
  isLoading?: boolean
  className?: string
  classNameIcon?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  icon,
  type = "button",
  disabled = false,
  size = "medium",
  variant = "primary",
  isLoading = false,
  className = "",
  classNameIcon = "",
  ...rest
}: ButtonProps) {
  const buttonClasses = {
    base: "px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300",
    size: getSizeClass(size),
    variant: getVariantClass(variant, disabled),
    disabled: disabled ? "cursor-not-allowed pointer-events-none" : "",
  }

  const IconComponent = isLoading ? SpinnerIcon : icon

  return (
    <button
      type={type}
      className={`${Object.values(buttonClasses).join(" ")} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {IconComponent && <IconComponent className={stringTrim(`mr-2 size-6 ${classNameIcon}`)} />}
      {children}
    </button>
  )
}

const sizeClasses: Record<ButtonSize, string> = {
  small: "text-sm",
  medium: "text-md",
  large: "text-2xl",
}

const getSizeClass = (size: "small" | "medium" | "large" = "medium"): string => sizeClasses[size] || ""

const variantClasses: Record<ButtonVariant, string> = {
  primary: "text-white bg-blue-500 hover:bg-blue-400 active:transform active:scale-95 transition-transform",
  warning: "text-white bg-red-500 hover:bg-red-400 active:transform active:scale-95 transition-transform",
  transparent:
    "text-blue-500 hover:bg-blue-100 border border-blue-500 hover:border-blue-400 active:transform active:scale-95 transition-transform",
  empty: "text-blue-500 hover:bg-blue-100 active:transform active:scale-95 transition-transform",
  outline: "text-white border border-white hover:bg-white-100 active:transform active:scale-95 transition-transform",
}

const getVariantClass = (
  variant?: "primary" | "warning" | "transparent" | "empty" | "outline",
  disabled?: boolean,
): string => {
  const baseClass = (variant && variantClasses[variant]) || ""
  return disabled ? `${baseClass} bg-gray-300` : baseClass
}
