import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftItems from "../Shared/LeftItems/LeftItems";
import RightItems from "../Shared/RightItems/RightItems";
import BreakingNews from "./BreakingNews";
import News from "../../Component/News/News";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="total grid grid-cols-1 md:grid-cols-4 md:gap-5">
        <div className="leftCon ">
          <LeftItems></LeftItems>
        </div>
        <div className="middleCon col-span-2">
          {news.map((singleNews) => (
            <News key={singleNews._id} news={singleNews}></News>
          ))}
        </div>
        <div className="rightCon ">
          <RightItems></RightItems>
        </div>
      </div>
    </div>
  );
};

export default Home;
