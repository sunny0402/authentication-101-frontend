import axios from "axios";

//testing locally backend will run on 3500
export default axios.create({
  baseURL: "http://localhost:3500",
});
