export type DividerProps = {
  orientation?: "horizontal" | "vertical"
  className?: string
}

const Divider: React.FC<DividerProps> = ({ orientation = "horizontal", className = "" }) => {
  if (orientation === "horizontal")
    return (
      <hr
        className={`from-1% to-99% h-px 
      border-t-0 bg-transparent bg-gradient-to-r from-neutral-300
      via-neutral-600 via-50% to-neutral-300
      opacity-25 ${className}`}
      />
    )

  return (
    <div
      className={`from-1% to-99% inline-block h-full min-h-[1em] w-px 
  self-stretch border-t-0 bg-gradient-to-b from-neutral-300
  via-neutral-600 via-50% to-neutral-300
  opacity-25 ${className}`}
    ></div>
  )
}

export default Divider
