import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import SCREENS from "./constants";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />
  },
  {
    path: SCREENS.Dashboard,
    element: <Dashboard />
  }
])

export default router;