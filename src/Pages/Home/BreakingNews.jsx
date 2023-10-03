import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-100 p-1 rounded">
      <button className="btn btn-error">Leatest News</button>
      <Marquee pauseOnHover={true} className="text-2xl font-bold">
        Hey there, I am a professional  <span className="bg-yellow-500"> (M E R N) </span>  full-stack
        developer . Almost 3 Year experianced Developer.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
