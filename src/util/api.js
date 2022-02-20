import axios from "axios";

export default axios.create({
  baseURL: "https://backend.spaceworms.app",
  headers: {
    "Content-Type": "application/json",
  },
});
