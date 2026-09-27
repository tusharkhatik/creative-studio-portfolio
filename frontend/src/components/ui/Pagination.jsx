import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  disabled = false,
}) {
  if (totalPages <= 1) {
    return null;
  }

  const goToPage = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage ||
      disabled
    ) {
      return;
    }

    onPageChange(page);
  };

  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let page = 1; page <= totalPages; page += 1) {
        pages.push(page);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (
      let page = startPage;
      page <= endPage;
      page += 1
    ) {
      pages.push(page);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <nav
      className="flex items-center justify-between gap-4"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft size={16} />
        Previous
      </button>

      <div className="flex items-center gap-1">
        {getPages().map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-sm text-gray-500"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              disabled={disabled}
              aria-current={isActive ? "page" : undefined}
              className={[
                "flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-medium",
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100",
                disabled
                  ? "cursor-not-allowed opacity-50"
                  : "",
              ].join(" ")}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={
          currentPage === totalPages || disabled
        }
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}

export default Pagination;