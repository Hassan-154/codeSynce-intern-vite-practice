import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <LoginPage/>
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
