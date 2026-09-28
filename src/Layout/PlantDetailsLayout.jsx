import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import PlantDetails from "../Pages/PlantDetails";
import Footer from "../Components/Footer";


const PlantDetailsLayout = () => {
    return (
        <div>
           <header>
            <Navbar></Navbar>
            </header> 
            <main>
                <PlantDetails></PlantDetails>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default PlantDetailsLayout;