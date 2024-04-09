export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  className?: string
};

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', className = '' }) => {
  if (orientation === 'horizontal') return <hr
    className={`h-px border-t-0 bg-transparent 
      bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300
      from-1% via-50% to-99%
      opacity-25 ${className}`}/>

  return <div className={`inline-block h-full min-h-[1em] w-px self-stretch border-t-0 
  bg-gradient-to-b from-neutral-300 via-neutral-600 to-neutral-300
  from-1% via-50% to-99%
  opacity-25 ${className}`}></div>
};

export default Divider;
