import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import LoginPage from './pages/LoginPage.jsx';
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// import Practice from "./pages/Practice";
//import LifeCycle from "./TaskCollection/LifeCycle.jsx";
import FilterApi from './TaskCollection/FilterApi.jsx'
import CopyBOx from "./TaskCollection/CopyBox.jsx";
import CopyBoxWithCheck from "./TaskCollection/CopyBoxWithCheck.jsx";
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navigate to="/login" />,
  // },
  // {
  //   path: '/login',
  //   element: <LoginPage/>
  // },
  // {
  //   path: '/',
  //   element: <Navigate to='/practice'/>
  // },
  // {
  //   path: '/practice',
  //   element: <Practice/>
  // },
  {
    path: '/',
    element: <CopyBoxWithCheck/>
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
