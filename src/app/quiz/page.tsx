import React from "react";
export default function quiz() {

  return (<div><h1>Preliminary Quiz</h1>
    <form action="https://localhost:3001/" method="post">
        <label>1. What is your experience level? </label><br></br>
        <input type="radio" id="novice" name="experience" value="Novice" required></input>
        <label htmlFor="novice">Novice: </label><br></br>
        <input type="radio" id="intermediate" name="experience" value="Intermediate" required></input>
        <label htmlFor="intermediate">Intermediate</label><br></br>
        <input type="radio" id="javascript" name="experience" value="Advanced" required></input>
        <label htmlFor="advanced">Advanced</label><br></br>

        <label htmlFor="mileage">2. How many miles are you willing to run each week?</label><br></br>
        <input type="number" id="mileage" name="totalMileage" required></input><br></br>

        <label htmlFor="maxDistance">3. How many miles are you willing to run in one session?</label><br></br>
        <input type="number" id="maxDistance" name="maxLongRun" required></input><br></br>

        <label htmlFor="numWeeks">4. How many weeks do you have to train?</label><br></br>
        <input type="number" id="numWeeks" name="totalWeeks" required></input><br></br>

        <button type="submit">See Your Custom Training Plan</button>
    </form>
  </div>

  );
}

