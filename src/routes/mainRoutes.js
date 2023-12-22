import { lazy } from "react";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";
import GuestGuard from "../utils/route-guard/GuestGuard";

const HomePage = Loadable(lazy(() => import("../pages/Home")));

const mainRoutes = {
  path: "/",
  element: (
    <GuestGuard>
      <MainLayout />
    </GuestGuard>
  ),
  errorElement: (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>404. Page Not Found</h1>
    </div>
  ),
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
};

export default mainRoutes;
