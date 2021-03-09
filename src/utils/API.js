import axios from "axios";
let resultLimit = 5;
const url = `https://randomuser.me/api/?results=${resultLimit}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function() {
    let employees = axios.get(url);
    console.log(employees);
    return employees;
  }
};
