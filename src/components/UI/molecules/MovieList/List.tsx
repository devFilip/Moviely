import { useMemo } from "react";
// import { useListingMemoized } from "../../../../customHooks/useListingMemoized";
import { Movie } from "../../../../models/MovieModel";
import MovieAlertModal from "../MovieAlertModal/MovieAlertModal";
import Card from "../MovieCard/Card";
import "./List.css";

interface List {
  items: Array<Movie>;
  modal: boolean;
  onModal: () => void;
}

const List: React.FC<List> = ({ items, modal, onModal }) => {
  const cards = useListingMemoized(items, Card, modal, onModal);
  if (items.length === 0) return <span>There are no movies in database.</span>;
  return (
    <div className="list view-wrap" style={{ paddingTop: "4.5rem" }}>
      {cards}
    </div>
  );
};
export const useListingMemoized = (
  items: Array<any>,
  Element: React.FC<any>,
  ...rest: Array<any>
) => {
  return useMemo(() => {
    return items.map((item) => <Element key={item.id} item={item} {...rest} />);
  }, [items]);
};

export default List;
