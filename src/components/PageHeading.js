//displays above DirectoryContainer
import React from "react";

function PageHeading() {
  return (
    <div style={{padding: 15}}className="jumbotron">
      <p style={{fontSize: 25, marginBottom: 0}} className="display-4">Your Organization's Directory</p>
      <p style={{color:"gray", paddingLeft: 12, marginTop: 0}} className="lead">{
      (new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format())
      }</p>
    </div>
  );
}

export default PageHeading;
