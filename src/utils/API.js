import axios from "axios"; 
const url = "https://randomuser.me/api/?format&results=3";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function() {
    return axios.get(url);
  }
};
