import axios from "axios";

export default axios.create({
  // baseURL: "https://backend.spaceworms.app",// lo cambiamos para el test
  baseURL: "http://18.228.213.2:3001", // sa aws
  headers: {
    "Content-Type": "application/json",
  },
});
