import Activity from "./Activity";
import React from "react";

function Calendar() {
  return <div className="calendar">{createCalendar()}</div>;
}

function createCalendar() {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const firstMonday = new Date();
  firstMonday.setDate(firstDayOfMonth.getDate() - ((firstDayOfMonth.getDay() + 6) % 7));
  const lastSunday = new Date();
  lastSunday.setDate(lastDayOfMonth.getDate() + ((7 - lastDayOfMonth.getDay()) % 7));

  let daysOfMonth = [];
  for (const curr = new Date(firstMonday); curr <= lastSunday; curr.setDate(curr.getDate() + 1)) {
      daysOfMonth.push(new Date(curr));
  }

  return daysOfMonth.map(day => <Activity key={day.getDay()} day={day}/>)
}

export default Calendar;
