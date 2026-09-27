import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import PlantsHero from "../Components/PlantsLayout/PlantsHero";
import AllPlants from "../Components/PlantsLayout/AllPlants";
import Footer from "../Components/Footer";

const PlantsLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <PlantsHero></PlantsHero>
      </header>
      <main className="lg:px-10 px-2 md:px-4">
        <div className="">
          <AllPlants></AllPlants>
        </div>
        <Outlet></Outlet>
      </main>
      <footer className="mt-2">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default PlantsLayout;
