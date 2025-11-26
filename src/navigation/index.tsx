import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import SCREENS from "./constants";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/dashboard/profile";
import Card from "../pages/dashboard/card";

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />
  },
  {
    path: SCREENS.DASHBOARD,
    element: <Dashboard />
  },
  {
    path: SCREENS.PROFILE,
    element: <Profile />
  },
  {
    path: SCREENS.CARD,
    element: <Card />
  },
])

export default router;