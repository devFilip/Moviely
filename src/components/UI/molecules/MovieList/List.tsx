import { Movie } from "../../../../models/MovieModel";
import Card from "../MovieCard/Card";
import "./List.css";

interface List {
  items: Array<Movie>;
}

const List: React.FC<List> = ({ items }) => {
  if (items.length === 0)
    return <span>There are no movies of that kind in database.</span>;
  return (
    <div className="list view-wrap">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
