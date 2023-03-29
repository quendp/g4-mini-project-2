import axios from "axios";

export default axios.create({
  // development api :
  // baseURL: "http://127.0.0.1:5000",
  // deployment api :
  baseURL: "https://lakbay-test-server.up.railway.app",
});
