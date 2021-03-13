//DirectoryContainer is the main container for page content. Includes all excecpt heading.
// export to app.js to display below the PageHeading component on the index page
import React from "react";
import API from "../utils/API";
import Row from "./Row";
import Container from "./Container";
import axios from "axios";
let resultLimit = 5;
// expected example: https://randomuser.me/api/?results=5
const url = `https://randomuser.me/api/?results=${resultLimit}`;
console.log("url after template literal" + url);

// eslint-disable-next-line import/no-anonymous-default-export

  let axiosSearch = () => {
    //let employees = axios.get(url);
   // console.log(employees);
    return  axios.get(url);
  };



class DirectoryContainer extends React.Component {
  state = {
    result: {},
    search: "",
  };

  // react lifecycle function: runs when component mounts
  componentDidMount() {
    console.log({ Container });
    this.getEmployees();
    console.log("EMPLOYEE DATA:  \n " + this.getEmployees());
  }

  // return randomized list of employees
  getEmployees = () => {
    axiosSearch.search()
      .then(console.log(" Axios API Result: \n "))
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };


  render() {
    return (
        <div className="container">
          <Row>
            <div className="col md-8">
              <img alt="place holder" src=".\screen-main.JPG"></img>
            </div>
            </Row>
        </div>
    );
  }

}

export default DirectoryContainer;




