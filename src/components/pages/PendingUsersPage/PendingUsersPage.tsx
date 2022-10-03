import useUsers from "../../../customHooks/useUsers";
import { UserModel } from "../../../models/UserModel";
import BlueTitle from "../../UI/atoms/BlueTitle/BlueTitle";
import PendingUser from "../../UI/organisms/PendingUser/PendingUser";

const PendingUsersPage = () => {
  const users = useUsers();
  return (
    <div className="view">
      <div className="view-wrap" style={styles.pendingUsersPage}>
        <BlueTitle title="Pending users" />
        {users.map((u: UserModel) => (
          <PendingUser key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
};
const styles: any = {
  pendingUsersPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default PendingUsersPage;
