export type TooltipProps = {
  content: string;
  classNameWrapper?: string;
  classNameContent?: string;
  children: JSX.Element
};

const Tooltip: React.FC<TooltipProps> = ({
                                           content,
                                           classNameWrapper = '',
                                           classNameContent = '',
                                           children
                                         }) => {

  const combinedClassName = `${classNameWrapper} group relative`;

  return (
    <div className={combinedClassName}>
      {children}
      <div
        role="tooltip"
        className={`invisible opacity-0 
        group-hover:visible group-hover:opacity-100
        absolute z-20 
        transition-opacity duration-200 ease-in-out
        px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-sm max-w-[300px] 
        mt-1 ${classNameContent}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
