import React from "react";
import Calendar from "./components/Calendar";
import HomeNavbar from "./components/HomeNavbar";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <h3>Activity Calendar</h3>
      <Calendar />
    </div>
  );
}
