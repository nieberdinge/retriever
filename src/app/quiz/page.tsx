import React from "react";
export default function quiz() {

  return (<div><h1>Preliminary Quiz</h1>
    <form action="/about">
        <label htmlFor="experience">1. What is your experience level? </label><br></br>
        <input type="radio" id="novice" name="experience" value="Novice"></input>
        <label htmlFor="novice">Novice: </label><br></br>
        <input type="radio" id="intermediate" name="experience" value="Intermediate"></input>
        <label htmlFor="intermediate">Intermediate</label><br></br>
        <input type="radio" id="javascript" name="experience" value="Advanced"></input>
        <label htmlFor="advanced">Advanced</label><br></br>

        <label htmlFor="mileage">2. How many miles are you willing to run each week?</label><br></br>
        <input type="text" id="mileage" name="maxWeeklyMileage"></input><br></br>

        <label htmlFor="maxDistance">3. What is the furthest you're willing to run in one session?</label><br></br>
        <input type="text" id="maxDistance" name="maxDistance"></input><br></br>

        <button type="submit">See Your Custom Training Plan</button>
    </form>
  </div>

  );
}

