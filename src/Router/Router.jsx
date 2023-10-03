import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Component/Login/Login";
import Registration from "../Component/Ragistration/Registration";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("news.json")
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/registraton",
        element:<Registration></Registration>
      }
    ]
  }
])

export default Router;