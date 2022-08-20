import { Movie } from "../../../../models/MovieModel";
import Card from "../MovieCard/Card";
import "./List.css";

interface List {
  items: Array<Movie>;
}

const List: React.FC<List> = ({ items }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
