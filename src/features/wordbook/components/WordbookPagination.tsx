import React from "react";

type Props = {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
  visiblePages?: (number | "...")[];
  className?: string;
};

export const WordbookPagination: React.FC<Props> = ({
  current,
  total,
  onPageChange,
  visiblePages,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-2 justify-center mt-4 flex-wrap ${className}`}
    >
      <button
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-300 disabled:text-gray-700 transition"
      >
        ←
      </button>

      {visiblePages?.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded transition ${
              page === current
                ? "bg-boldLabel text-white"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-300 disabled:text-gray-700 transition"
      >
        →
      </button>
    </div>
  );
};
