import Icon from "../../atoms/Icon/Icon";
import Rating from "../MovieRating/Rating";

interface ModifyMovie {
  role: string;
  rate: number;
}

const ModifyMovie: React.FC<ModifyMovie> = ({ role, rate }) => {
  if (role === "admin")
    return (
      <div style={{ display: "flex" }}>
        <Icon
          iconSrc="/images/edit.png"
          iconStyle={{ cursor: "pointer", marginRight: "1.5rem" }}
        />
        <Icon iconSrc="/images/trash.png" iconStyle={{ cursor: "pointer" }} />
      </div>
    );

  return <Rating rating={rate} />;
};

export default ModifyMovie;
