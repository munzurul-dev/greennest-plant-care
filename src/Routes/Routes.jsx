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

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <p>Erorr Page</p>,
    children: [],
  },
  {
    path: "/plants",
    Component: PlantsLayout,
    errorElement: <p>error Page</p>,
    children: [
      {
        index: true,
        element: (
          <>
            <PlantsHero />
            <AllPlants />
          </>
        ),
      },
      {
        path: "plantDetails/:id",
        Component: PlantDetails,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Resgister,
      },
    ],
  },
  {
    path: "/myprofile",
    Component: MyProfile,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
