import axios from "axios";
let resultLimit = 5;
// expected example: https://randomuser.me/api/?results=5
const url = `https://randomuser.me/api/?results=${resultLimit}`;
console.log("url after template literal" + url);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function() {
    //let employees = axios.get(url);
   // console.log(employees);
    return  axios.get(url);
  }
};
