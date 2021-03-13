//DirectoryContainer is the main container for page content. Includes all excecpt heading.
// export to app.js to display below the PageHeading component on the index page
import React, { Component } from "react";
import axios from "axios";


const url = `https://randomuser.me/api/?results=20`;

class DirectoryContainer extends Component {

constructor(props){
  super(props);
    this.state = {
      emps: [],
      error: null,
      empsTemp: []
    };
  }

  // react lifecycle function: runs when component mounts
  componentDidMount() {
  axios.get(url)
    .then(
     (res) => {
       console.log(res)
      this.setState({
        emps: res.data.results
      });
     },
    (error) => {
      this.setState({
         error
      })
    })
    .then(
      console.log(this.state.employees)
    )
  }

  render() {
  // const {employees} = this.state; 
    const { emps } = this.state; 
    return (
      <div className="container-fluid sort-section">
        <div className="row" id="tbl-hdr">
        <div className="col">  </div>  
        <div className="col"> <button className="btn-secondary"> ⇵ Name </button> </div>  
        <div className="col">  </div> 
        <div className="col">  </div> 
        <div className="col"> <button className="btn-secondary"> ⇵ Email </button> </div> 
       </div> 

                {
                  emps.map((emp) => (
                    <div className="row" key={emp.email}>
                  
                      <div className="col col-md-auto">
                        <img alt="Employee" src={emp.picture.large}></img>
                      </div>   
                       <div className="col">
                           <span className="h"><p><b>Name </b></p></span>  {emp.name.last},  {emp.name.first}  
                       </div>   
                       <div className="col"> <span className="h">   <p><b> Location </b></p></span> {emp.location.city},  {emp.location.state} ({emp.location.country}) </div>
                       <div className="col"> <span className="h">   <p><b> Phone </b></p></span>  <p>{emp.phone}</p>  </div>
                       <div className="col"> <span className="h">   <p><b> Email </b></p></span>  <p> {emp.email} </p> </div>
                    </div>
                  ))
                }
      </div>
    );
  }
}

export default DirectoryContainer;



