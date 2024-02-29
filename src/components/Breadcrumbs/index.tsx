type BreadcrumbProps = {
    items: string[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== 0 && (
              <div className="flex items-center">
                <svg className="rtl:rotate-180 w-6 h-6 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 16 6-6-6-6" />
                </svg>
                <a href="#" className="ms-2 text-base font-medium text-gray-700 hover:text-blue-600 md:ms-4 dark:text-gray-400 dark:hover:text-white">{item}</a>
              </div>
            )}
            {index === 0 && (
              <a href="#" className="inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                {item}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
