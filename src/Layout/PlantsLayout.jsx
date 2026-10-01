import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import PlantDetails from "../Pages/PlantDetails";

const PlantsLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="lg:px-10 px-2 md:px-4">
        <Outlet>
          <PlantDetails></PlantDetails>
        </Outlet>
      </main>
      <footer className="mt-2">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default PlantsLayout;
