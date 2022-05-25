import axios from "axios";

const baseURL = process.env.VUE_APP_API_URL;
// console.log(`axios.js: ${baseURL}`);

export default axios.create({
  baseURL,
});
