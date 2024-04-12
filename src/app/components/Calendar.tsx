import Activity from "./Activity";
import React from "react";

function Calendar() {
  return <div className="calendar">{createCalendar()}</div>;
}

function createCalendar() {
  const now = new Date("2024-04-08");
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const firstMonday = new Date();
  firstMonday.setDate(firstDayOfMonth.getDate() - ((firstDayOfMonth.getDay() + 6) % 7));
  const lastSunday = new Date();
  lastSunday.setDate(lastDayOfMonth.getDate() + ((6 - lastDayOfMonth.getDay() + 1) % 7));

  let daysOfMonth = [];
  for (const curr = new Date(firstMonday); curr <= lastSunday; curr.setDate(curr.getDate() + 1)) {
      daysOfMonth.push(new Date(curr));
  }

  console.debug(daysOfMonth)
  console.debug(firstDayOfMonth, lastDayOfMonth, firstMonday, lastSunday)
  console.debug(firstMonday.getDay() % 7)
  return daysOfMonth.map(day => <Activity key={day.getDay()} day={day}/>)
}

export default Calendar;
