
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PlantsLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="lg:px-10 px-2 md:px-4">
        <Outlet />
      </main>

      <footer className="mt-2">
        <Footer />
      </footer>
    </div>
  );
};

export default PlantsLayout;