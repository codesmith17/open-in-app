import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "./Icons/Dashboard";
import Invoice from "./Icons/Invoice";
import Calender from "./Icons/Calender";
import Schedule from "./Icons/Schedule";
import Notifications from "./Icons/Notifications";
import Settings from "./Icons/Settings";

const Sidebar = () => {
  return (
    <ul className="flex bg-white flex-col space-y-4 p-4">
      <NavLink
        to="/dashboard"
        className="flex items-center p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#605bff] hover:text-white"
      >
        <Dashboard />
        <span className="ml-2">Dashboard</span>
      </NavLink>
      <NavLink
        to="/invoice"
        className="flex items-center p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#605bff] hover:text-white"
      >
        <Invoice />
        <span className="ml-2">Invoice</span>
      </NavLink>
      <NavLink
        to="/schedule"
        className="flex items-center p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#605bff] hover:text-white"
      >
        <Schedule />
        <span className="ml-2">Schedule</span>
      </NavLink>
      <NavLink
        to="/calender"
        className="flex items-center p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#605bff] hover:text-white"
      >
        <Calender />
        <span className="ml-2">Calender</span>
      </NavLink>
      <NavLink
        to="/notification"
        className="flex items-center p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#605bff] hover:text-white"
      >
        <Notifications />
        <span className="ml-2">Notifications</span>
      </NavLink>
      <NavLink
        to="/settings"
        className="flex items-center p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#605bff] hover:text-white"
      >
        <Settings />
        <span className="ml-2">Settings</span>
      </NavLink>
    </ul>
  );
};

export default Sidebar;
