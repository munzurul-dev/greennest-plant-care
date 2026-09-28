import { Outlet } from "react-router";
import Login from "../Pages/Login";
import Resgister from "../Pages/Resgister";
import MyProfile from "../Pages/ MyProfile";

const AuthLayout = () => {
  return (
    <div>
      <Outlet>
        <Login></Login>
        <Resgister></Resgister>
        <MyProfile></MyProfile>
      </Outlet>
    </div>
  );
};

export default AuthLayout;
