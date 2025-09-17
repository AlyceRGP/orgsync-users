//router.tsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NewsFeed from "./pages/dashboard/NewsFeed";
import Events from "./pages/dashboard/Events";
import Organizations from "./pages/dashboard/Organizations";
import Profile from "./pages/dashboard/Profile";
import Games from "./pages/dashboard/Games";
import DashboardHome from "./pages/dashboard/DashboardHome";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Navigate to="/signin" replace />
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "newsfeed", element: <NewsFeed /> },
      { path: "events", element: <Events /> },
      { path: "organizations", element: <Organizations /> },
      { path: "profile", element: <Profile /> },
      { path: "games", element: <Games /> },
    ],
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
