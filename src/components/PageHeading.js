//displays above DirectoryContainer
import React from "react";

function PageHeading() {
  return (
    <div className="center jumbotron">
      <h1 className="display-2">Your Organization's Directory</h1>
      <p className="lead">Hello, today is {
      (new Intl.DateTimeFormat('en-US', { dateStyle: 'full', HourCycle: 'H12', timeStyle: 'short' }).format())
      }</p>
    </div>
  );
}

export default PageHeading;
