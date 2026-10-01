
import { useNavigate } from "react-router";



const Home = () => {
  
    const navigate = useNavigate();
    return (
       navigate("/")  
    );
};

export default Home;