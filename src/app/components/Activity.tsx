import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

interface ActivityProps {
    day: number
}

function Activity(activityProps: ActivityProps) {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">This is day {activityProps.day}</h5>
            <p className="card-text">Run {activityProps.day} miles </p>
        </div>
    </div>
  );
}

export default Activity;
1;
