import _ from "lodash";
import "./Paginate.css";

interface Paginate {
  currentPage: number;
  itemsCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}
const Paginate: React.FC<Paginate> = ({
  currentPage,
  itemsCount,
  pageSize,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  const activeClass = (page: number, currentPage: number) =>
    page === currentPage ? "active__page" : "";

  if (pagesCount === 1 || pagesCount === 0) return null;
  return (
    <ul className="paginate">
      <button
        className="paginate__item btn"
        disabled={currentPage === pages[0]}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((page) => (
        <li
          key={page}
          className={`paginate__item ${activeClass(page, currentPage)}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}

      <button
        className="paginate__item btn"
        disabled={currentPage === pages[pages.length - 1]}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </ul>
  );
};

export default Paginate;
