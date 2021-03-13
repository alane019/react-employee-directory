import React from "react";

function EmployeeDetail(props) {

  return (
    <div className="text-center">
      <h3>State: {props.location.city}   </h3>

      { /*
       <ul>   {props.map((itm, idx) => (<li key={idx}> {itm}  </li>))}</ul>
    
      { response.map((item, index) => (<li key={index}>{item}</li>)) }
       */ }
    </div>
  );
}
export default EmployeeDetail;

/*
    

      <h3>Country: {props.location.country}</h3>
      <img
        alt="employee"
        className="img-fluid"
        src={props.picture.thumbnail}
        style={{ margin: "0 auto" }}
      />
  */
