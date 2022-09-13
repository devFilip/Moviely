import UserService from "../../../services/UserService";

export const requestGetUsers = () => UserService.getUsers();
export const requestGetUser = (userId: string) => UserService.getUser(userId);
