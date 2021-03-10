//DirectoryContainer is the main container for page content. Includes all excecpt heading.
// export to app.js to display below the PageHeading component on the index page
import React from "react";
import API from "../utils/API";
import Row from "./Row";
import Container from "./Container";

//import EmployeeDetail from "./EmployeeDetail";

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
    API.search()
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };


  render() {
    return (
        <div className="container">
          <Row>
            <div className="col md-8">
            </div>
            </Row>
        </div>
    );
  }

}

export default DirectoryContainer;




