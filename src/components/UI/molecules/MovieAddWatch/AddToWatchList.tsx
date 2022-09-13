import Button from "../../atoms/Button/Button";
import "./AddToWatchList.css";

const AddToWatchList = () => {
  return (
    <div className="add-to-watch-list">
      <span>
        This movie is not in your watched list. Would you like to add it?
      </span>
      <Button
        text="Add to my watch list"
        color="#2596BE"
        size="30%"
        padding="1rem"
        textColor="white"
      />
    </div>
  );
};

export default AddToWatchList;
