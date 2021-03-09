import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img
        alt="employee"
        className="img-fluid"
        src={props.thumbnail}
        style={{ margin: "0 auto" }}
      />
      <h3>City: {props.city}</h3>
      <h3>State: {props.state}</h3>
      <h3>Country: {props.country}</h3>
    </div>
  );
}
export default EmployeeDetail;
