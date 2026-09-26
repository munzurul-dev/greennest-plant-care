import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";



const router = createBrowserRouter([
    {
        path:"/",
        Component: HomeLayout,
        errorElement: <p>Erorr Page</p>,
        children:[
            
        ]
        
    }
])

export default router;