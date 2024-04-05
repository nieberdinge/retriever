import "bootstrap/dist/css/bootstrap.css";
import React from "react";

interface ActivityProps {
  day: Date;
}

function Activity(activityProps: ActivityProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{activityProps.day.toDateString()}</h5>
        <p className="card-text">Run {activityProps.day.getDay()} miles </p>
      </div>
    </div>
  );
}

export default Activity;
