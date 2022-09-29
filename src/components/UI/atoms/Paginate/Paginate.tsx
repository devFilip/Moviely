import _ from "lodash";
import "./Paginate.css";

interface Paginate {
  currentPage: number;
  itemsCount: number;
  pageSize: number;
  onPageChange: (e: MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
// sifra na telefonu je 1808
const Paginate: React.FC<Paginate> = ({
  currentPage,
  itemsCount,
  pageSize,
  onPageChange,
}) => {
  console.log(itemsCount);

  const pagesCount = Math.floor(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  const active = (page: number, currentPage: number) => {
    return page === currentPage ? "active__page" : "";
  };
  return (
    <ul className="paginate">
      <li className="paginate__item">Previous</li>
      {pages.map((page) => (
        <li
          className={`paginate__item ${active(page, currentPage)}`}
          onClick={(page) => onPageChange(page)}
        >
          {page}
        </li>
      ))}
      <li className="paginate__item">Next</li>
    </ul>
  );
};

export default Paginate;
