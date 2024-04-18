import React from "react"

export type PaginationProps = {
  variant?: "small" | "large"
  className?: string
}

const Pagination: React.FC<PaginationProps> = ({ variant = "small", className = "" }) => {
  const smallPagination = (
    <nav aria-label="Page navigation example" className={`pagination ${className}`}>
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a
            href="#"
            className="ms-0 flex h-8 items-center justify-center rounded-l-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        {[1, 2, 3, 4, 5].map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex h-8 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )

  const largePagination = (
    <nav aria-label="Page navigation example" className={`pagination ${className}`}>
      <ul className="inline-flex h-10 -space-x-px text-base">
        <li>
          <a
            href="#"
            className="ms-0 flex h-10 items-center justify-center rounded-l-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        {[1, 2, 3, 4, 5].map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              className="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )

  return variant === "large" ? largePagination : smallPagination
}

export default Pagination
