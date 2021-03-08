import React, { Component } from "react";
import Container from "./Container";
import API from "../utils/API";


class DirectoryContainer extends Component {
  state = {
    result: {},
    search: ""
  };

 // re
  componentDidMount() {
    this.getEmployees();
  }

  // return randomized list of employees
  getEmployees = () => {
    API.search()
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
  };

  // handles any form submits
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  // handles sort form submission
  handleFormSubmit = event => {
    event.preventDefault();
    this.getEmployees(this.state.search);
  };


}


export default DirectoryContainer;
