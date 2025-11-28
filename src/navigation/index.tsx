import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import SCREENS from "./constants";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/dashboard/profile";
import Card from "../pages/dashboard/card";
import FundPage from "../pages/dashboard/fund";
import TransactionPage from "../pages/dashboard/transaction";

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />
  },
  {
    path: SCREENS.LOGIN,
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
  {
    path: SCREENS.ADD_BALANCE,
    element: <FundPage />
  },
  {
    path: SCREENS.TRANSACTIONS,
    element: <TransactionPage />
  },
])

export default router;