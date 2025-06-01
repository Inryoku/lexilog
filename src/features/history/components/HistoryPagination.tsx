import React from "react";

export const HistoryPagination = ({
  current,
  total,
  onPageChange,
}: {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}) => {
  // 表示するページ番号のリスト（例：1〜total）
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 justify-center mt-4 flex-wrap">
      <button
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 transition"
      >
        ←
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded transition ${
            page === current
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 transition"
      >
        →
      </button>
    </div>
  );
};
