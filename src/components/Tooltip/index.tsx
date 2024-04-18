export type TooltipProps = {
  content: string
  classNameWrapper?: string
  classNameContent?: string
  children: JSX.Element
}

const Tooltip: React.FC<TooltipProps> = ({ content, classNameWrapper = "", classNameContent = "", children }) => {
  const combinedClassName = `${classNameWrapper} group relative`

  return (
    <div className={combinedClassName}>
      {children}
      <div
        role="tooltip"
        className={`invisible absolute 
        z-20 mt-1
        max-w-[300px] rounded-lg 
        bg-gray-900 px-3 py-2
        text-sm text-white opacity-0 shadow-sm transition-opacity duration-200 ease-in-out group-hover:visible 
        group-hover:opacity-100 ${classNameContent}`}
      >
        {content}
      </div>
    </div>
  )
}

export default Tooltip
