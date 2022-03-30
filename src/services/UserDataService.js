import http from "../http-common";
class UserDataService {
  // getAll() {
  //   return http.get("/user");
  // }
  getAll(userCity) {
    return http.get("/user", {
      params: {
        userCity
      }
    });
  }
  getAllCA() {
    return http.get("/user/CA");
  }
  getAllMembers() {
    return http.get("/user/members");
  }
  get(id) {
    return http.get(`/user/${id}`);
  }
  create(data) {
    return http.post("/user", data);
  }
  update(id, data) {
    return http.put(`/user/${id}`, data);
  }
  delete(id) {
    return http.delete(`/user/${id}`);
  }
  //   deleteAll() {
  //     return http.delete(`/user`);
  //   }
  // findByTitle(userCity) {
  //   return http.get(`/user?userCity=${userCity}`);
  // }
}
export default new UserDataService();