import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layout/HomeLayout";
import PlantsLayout from "../Layout/PlantsLayout";
import AuthLayout from "../Layout/AuthLayout";

import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Resgister from "../Pages/Resgister";
import MyProfile from "../Pages/ MyProfile";
import PlantsHero from "../Components/PlantsLayout/PlantsHero";
import AllPlants from "../Components/PlantsLayout/AllPlants";
import PlantDetails from "../Pages/PlantDetails";
import ForgotPassword from "../Pages/ForgotPassword";
import PrivetRoutes from "../Provider/PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/plants",
    Component: PlantsLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PrivetRoutes>
            <>
              <PlantsHero />
              <AllPlants />
            </>
          </PrivetRoutes>
        ),
      },
      {
        path: "plantDetails/:id",
        element: (
          <PrivetRoutes>
            <PlantDetails />
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Resgister,
      },
      {
        path: "forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
  {
    path: "/myprofile",
    element: (
      <PrivetRoutes>
        <MyProfile />
      </PrivetRoutes>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
