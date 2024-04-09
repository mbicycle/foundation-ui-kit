type Route = {
  route: string,
  text: string
}

export type BreadcrumbProps = {
    routes: Route[];
    classNameWrapper?: string;
    classNameItem?: string;
    connector?: React.ReactNode;
    activeStep?: number;
    onClickStep: ({event, route, index}:{ event: React.MouseEvent, route: string, index: number }) => void;
};

export function Breadcrumb({
                             routes,
                             classNameWrapper = '',
                             classNameItem = '',
                             connector,
                             onClickStep,
                             activeStep,
                             ...rest
}: BreadcrumbProps) {
  const renderConnector = () => {
    if (!connector) {
      return (
        <svg className="rtl:rotate-180 w-6 h-6 text-gray-400 mx-1" aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 16 6-6-6-6"/>
        </svg>
      )
    }
    return  connector;
  }

  return (
    <nav className={`flex ${classNameWrapper}`}  {...rest}>
      <ol className="inline-flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
        {routes.map(({route, text}, index) => (
          <li key={index} className="inline-flex items-center">
              <div className="flex items-center">
                {index !== 0 && renderConnector()}
                <button
                  type="button"
                  onClick={(event) => onClickStep({ event, route, index })}
                  className={`ms-2 text-base
                  hover:text-blue-600 md:ms-4 
                  ${activeStep === index ? 'text-blue-500 font-bold' : 'text-gray-700 font-medium'}
                  ${classNameItem}`}
                >
                  {text}
                </button>
              </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
