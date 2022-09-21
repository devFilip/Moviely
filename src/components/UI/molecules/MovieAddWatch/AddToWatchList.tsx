import Button from "../../atoms/Button/Button";
import "./AddToWatchList.css";

const AddToWatchList = () => {
  return (
    <div className="add-to-watch-list">
      <span>
        This movie is not in your watched list. Would you like to add it?
      </span>
      <Button text="Add to my watch list" style={styles.add} />
    </div>
  );
};
const styles = {
  add: {
    background: "#2596BE",
    width: "30%",
    padding: "1rem",
    color: "white",
  },
};

export default AddToWatchList;
