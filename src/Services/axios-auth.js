import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.myjobdesk.com/api",
});
export default instance;
