import Navbar from "../../Component/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import RightItems from "../Shared/RightItems/RightItems";
import BreakingNews from "./BreakingNews";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="total grid grid-cols-1 md:grid-cols-4 md:gap-5">
        <div className="leftCon ">
         
        </div>
        <div className="middleCon col-span-2  ">middle</div>
        <div className="rightCon "><RightItems></RightItems></div>
      </div>
    </div>
  );
};

export default Home;