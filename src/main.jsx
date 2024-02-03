import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login/Login.jsx";
import Upload from "./components/Directs/Upload.jsx";
import Invoice from "./components/Directs/Invoice.jsx";
import Schedule from "./components/Directs/Schedule.jsx";
import Calender from "./components/Directs/Calender.jsx";
import Notification from "./components/Directs/Notification.jsx";
import Settings from "./components/Directs/Settings.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login></Login>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/upload",
        element: <Upload></Upload>,
      },
      {
        path: "/invoice",
        element: <Invoice></Invoice>,
      },
      {
        path: "/schedule",
        element: <Schedule></Schedule>,
      },
      {
        path: "/calender",
        element: <Calender></Calender>,
      },
      {
        path: "/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
