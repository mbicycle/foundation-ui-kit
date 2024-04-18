import { InputHTMLAttributes, useState } from "react"

export type CategorySearchProps = {
  searchPlaceholder?: string
  categories: string[]
  elementSize?: "small" | "medium" | "large"
  className?: string
  onSubmit?: VoidFunction
} & InputHTMLAttributes<HTMLInputElement>

export function CategorySearch({
  searchPlaceholder,
  categories,
  elementSize = "medium",
  className = "",
  onSubmit,
  ...rest
}: CategorySearchProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All categories")

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category)
    setIsDropdownOpen(false)
  }

  return (
    <form className={`flex ${className}`} onSubmit={onSubmit}>
      <div className="relative inline-block">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedCategory}
          <svg
            className="ms-2.5 h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu absolute mt-1 w-full divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleCategorySelection(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        className={`relative inline-block ${elementSize === "small" ? "w-56" : elementSize === "large" ? "w-96" : "w-80"}`}
      >
        <label htmlFor="search-dropdown" className="sr-only">
          Search
        </label>
        <input
          type="search"
          id="search-dropdown"
          className="z-20 block w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
          placeholder={searchPlaceholder || "Search Mockups, Logos, Design Templates..."}
          required
          {...rest}
        />
        <button
          type="submit"
          className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  )
}
