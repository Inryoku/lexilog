export const Pagination = ({
  current,

  total,
  onPageChange,
}: {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > total) return;
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        disabled={current === 1}
        onClick={() => handlePageChange(current - 1)}
      >
        Previous
      </button>
      <span>
        Page {current} of {total}
      </span>
      <button
        disabled={current === total}
        onClick={() => handlePageChange(current + 1)}
      >
        Next
      </button>
    </div>
  );
};
