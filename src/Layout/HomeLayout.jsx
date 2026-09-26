import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Banner from "../Components/HomaLayout/Banner";
import PopularPlants from "../Components/HomaLayout/PopularPlants";
import CareTips from "../Components/HomaLayout/CareTips";
import GreenExperts from "../Components/HomaLayout/GreenExperts";
import PlantOfTheWeek from "../Components/HomaLayout/PlantOfTheWeek";
import Footer from "../Components/Footer";



const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className="lg:px-10 px-2 md:px-4">
                <div className="">
                    <PopularPlants></PopularPlants>
                    <CareTips></CareTips>
                    <GreenExperts></GreenExperts>
                    <PlantOfTheWeek></PlantOfTheWeek>
                </div>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;