import axios from "axios";

// using aws ip 52.15.191.202

export default axios.create({
  baseURL: process.env.API_HOST || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});
