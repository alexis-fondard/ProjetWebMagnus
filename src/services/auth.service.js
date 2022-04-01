import axios from 'axios';
import SHA256 from '../security/hash';
const API_URL = process.env.VUE_APP_API_URL;
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'user/login', {
        userEmail: user.email,
        pwdUser: SHA256(user.password)
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  // logout() {
  //   localStorage.removeItem('user');
  // }
  // register(user) {
  //   return axios.post(API_URL + 'signup', {
  //     username: user.username,
  //     email: user.email,
  //     password: user.password
  //   });
  // }
}
export default new AuthService();