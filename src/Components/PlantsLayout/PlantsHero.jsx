const PlantsHero = () => {
    return (
        <div>
            <div className="flex justify-center h-full bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url("https://i.postimg.cc/HszwnC8W/plants-Hero.png")`
            }}>
                <div className="md:p-20 p-10 text-center">
                    <h1 className="md:text-5xl text-3xl text-white font-bold">Explor Our Plants</h1>
                    <p className="text-base-100 text-md md:text-xl mt-2 md:mt-5">Find perfect plants make your home hreener healthier </p>
                </div>
            </div>
        </div>
    );
};

export default PlantsHero;