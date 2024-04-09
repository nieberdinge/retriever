import Activity from "./Activity";
import React from "react";

function Calendar() {
  return <div className="calendar">{createCalendar()}</div>;
}

function createCalendar() {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const prevMonday = new Date();
  prevMonday.setDate(firstDayOfMonth.getDate() - ((prevMonday.getDay() + 6) % 7));
  const lastSunday = new Date();
  lastSunday.setDate(lastDayOfMonth.getDate() + ((6 - lastSunday.getDay()) % 7));

  var daysOfMonth = [];
  for (prevMonday; prevMonday <= lastSunday; prevMonday.setDate(prevMonday.getDate() + 1)) {
      daysOfMonth.push(new Date(prevMonday));
  }

  return daysOfMonth.map(day => <Activity key={day.getDay()} day={day}/>)
}

export default Calendar;
