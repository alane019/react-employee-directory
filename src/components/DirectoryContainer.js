//DirectoryContainer is the main container for page content. Includes all excecpt heading.
// export to app.js to display below the PageHeading component on the index page
import React from "react";
import Container from "./Container";
import API from "../utils/API";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SortForm from "./SortForm";
import EmployeeDetail from "./EmployeeDetail";

class DirectoryContainer extends React.Component {
  state = {
    result: {},
    search: "",
  };

  // react lifecycle function: runs when components mounts
  componentDidMount() {
    console.log({ Container });
    this.getEmployees();
  }

  // return randomized list of employees
  getEmployees = () => {
    API.search()
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  // handles any form submits
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  //////////////////// ^^^ ok

  // handles sort form submission
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getEmployees(this.state.sort);
  };

  render() {
    return (
      <main>
        <Container>
          <Row>
            <Col size="md-8">
             <Card
              heading="employee-detail"
             >
                <EmployeeDetail
                  thumbnail={this.state.result.picture.thumbnail}
                  firstname={this.state.result.name.first}
                  lastname={this.state.result.name.last}
                  city={this.state.result.location.city}
                  state={this.state.result.location.state}
                  country={this.state.result.location.country}
                />
              </Card>
            </Col>
            <Col size="md-4">
            <Card heading="Sort">
              <SortForm
                value={this.state.sort}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>



          </Row>
        </Container>
        <SortForm />
      </main>
    );
  }

}

export default DirectoryContainer;
