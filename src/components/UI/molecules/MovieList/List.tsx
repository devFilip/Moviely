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
  if (items.length === 0) return <span>There are no movies database.</span>;
  return (
    <div className="list view-wrap" style={{ paddingTop: "4.5rem" }}>
      {items.map((item) => (
        <>
          <Card key={item.id} item={item} modal={modal} onModal={onModal} />
        </>
      ))}
    </div>
  );
};

export default List;
