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
  firstMonday.setDate(firstDayOfMonth.getDate() - ((firstMonday.getDay() + 6) % 7));
  const lastSunday = new Date();
  lastSunday.setDate(lastDayOfMonth.getDate() + ((6 - lastSunday.getDay()) % 7));

  var daysOfMonth = [];
  for (firstMonday; firstMonday <= lastSunday; firstMonday.setDate(firstMonday.getDate() + 1)) {
      daysOfMonth.push(new Date(firstMonday));
  }

  return daysOfMonth.map(day => <Activity key={day.getDay()} day={day}/>)
}

export default Calendar;
