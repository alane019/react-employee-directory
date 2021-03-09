import axios from "axios";
let resultLimit = 5;
// expected example: https://randomuser.me/api/?results=5
const url = `https://randomuser.me/api/?results=${resultLimit}`;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function(query) {
    //let employees = axios.get(url);
   // console.log(employees);
   console.log({query});
    return  axios.get(url);;
  }
};
