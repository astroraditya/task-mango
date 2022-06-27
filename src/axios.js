import axios from "axios";

const instance = axios.create({
  baseURL: 'https://ecom-sutt-default-rtdb.firebaseio.com/'
});

export default instance;