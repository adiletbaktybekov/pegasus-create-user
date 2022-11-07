import axios from "axios";

const API =  axios.create({
     baseURL: 'http://api.pegasushorse.net:8000/',
});

export default API;