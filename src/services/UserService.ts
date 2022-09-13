import api from "../api/axios";

class UserService {
  private client;
  constructor() {
    this.client = api;
  }
  getUsers = () => this.client?.get("/users");
  getUser = (userId: string) => this.client?.get(`/users/${userId}`);
}

export default new UserService();
