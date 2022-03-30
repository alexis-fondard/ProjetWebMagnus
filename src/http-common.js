import axios from "axios";
export default axios.create({
//   baseURL: "http://localhost:3000/api",
baseURL: process.env.VUE_APP_API_URL,  
headers: {
    "Content-type": "application/json"
  }
});