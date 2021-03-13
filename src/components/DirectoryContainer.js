//DirectoryContainer is the main container for page content. Includes all excecpt heading.
// export to app.js to display below the PageHeading component on the index page
import React, { Component } from "react";
import Row from "./Row";
import Container from "./Container";
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail";

const url = `https://randomuser.me/api/?results=2`;

// eslint-disable-next-line import/no-anonymous-default-export
    //let employees = axios.get(url);
   // console.log(employees);
   console.log(" ------------------------------ ");
axios.get(url)
    .then( res => {
      console.log(" - - - - -  - - - - -  - - - - - ")
      console.log(console.log(Array.from(res.data.results)));
      console.log(console.dir(res));
      console.log(" - - - - -  - - - - -  - - - - - ")
      console.log(res.data.results[0]);
      return(res.data.results);
    })
    console.log(" ------------------------------ ");

class DirectoryContainer extends Component {
  state = {
    result: {}
  };

  // react lifecycle function: runs when component mounts
  componentDidMount() {
    this.getEmployees();
    //console.log("EMPLOYEE DATA:  \n " + this.getEmployees().results);
  }

  // return randomized list of employees

  getEmployees = () => {
    axios.get(url)
      .then((res) => {
        return this.setState({ result: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
          <Row>
            <div className="col md-8">
              <img alt="place holder" src=".\screen-main.JPG"></img>
              {console.log("THIS is >>> "  + this )}
             <EmployeeDetail
                key={this.email}
                city={this.location.city.value}  
              />
            </div>
          </Row>
      </Container>
    );
  }
}
export default DirectoryContainer;

/*
   state={this.state.result.State}
   country={this.state.result.Country}
*/


