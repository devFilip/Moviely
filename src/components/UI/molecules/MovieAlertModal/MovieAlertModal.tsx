import BlueTitle from "../../atoms/BlueTitle/BlueTitle";
import Button from "../../atoms/Button/Button";
import ReactDOM from "react-dom";
import "./MovieAlertModal.css";

interface Modal {
  onModal: () => void;
  onDelete: () => void;
}

const MovieAlertModal: React.FC<Modal> = ({ onModal, onDelete }) => {
  const portal = document.getElementById("portal") as HTMLElement;
  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="movie-alert-modal">
        <BlueTitle title="Are you sure?" style={styles.title} />
        <span className="movie-alert-modal__text">
          Are you sure you want to delete this movie?
        </span>
        <div className="movie-alert-modal__buttons">
          <Button text="Cancel" style={styles.cancel} onClick={onModal} />
          <Button text="Delete" style={styles.delete} onClick={onDelete} />
        </div>
      </div>
    </>,
    portal
  );
};
const styles = {
  cancel: {
    background: "rgba(0, 0, 0, 0.3)",
    color: "white",
    width: "45%",
    fontSize: "2rem",
    padding: "3rem",
  },
  delete: {
    background: "rgba(244, 36, 36, 0.5)",
    color: "white",
    width: "45%",
    fontSize: "2rem",
    padding: "3rem",
  },
  title: {
    width: "100%",
    heigth: "30%",
    fontSize: "3.5rem",
  },
};
export default MovieAlertModal;
