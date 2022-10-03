import { UserModel } from "../../../../models/UserModel";
import { createUsername } from "../../../../utils/createUsername";
import Button from "../../atoms/Button/Button";
import "./PendingUser.css";

interface PendingUser {
  user: UserModel;
}

const PendingUser: React.FC<PendingUser> = ({ user }) => {
  const userImg = user.sex === "MALE" ? "/images/man.png" : "/images/woman.png";
  return (
    <div className="pending-user">
      <div className="pending-user__img">
        <img src={userImg} className="user__img" alt="user img based on sex" />
      </div>
      <div className="pending-user__names">
        <p style={{ marginBottom: "1rem" }}>{createUsername(user.email)}</p>
        <span>{user.lastName}</span>, <span>{user.firstName}</span>
      </div>
      <div className="pending-user__buttons">
        <Button text="Approve" style={styles.approve} />
        <Button text="Deny" style={styles.deny} />
      </div>
    </div>
  );
};
const styles = {
  approve: {
    background: "rgba(37, 150, 190, 0.5)",
    color: "white",
    width: "60%",
    padding: "1rem",
    marginRight: "2.5rem",
  },
  deny: {
    background: "rgba(244, 36, 36, 0.5)",
    color: "white",
    width: "60%",
    padding: "1rem",
  },
};

export default PendingUser;
