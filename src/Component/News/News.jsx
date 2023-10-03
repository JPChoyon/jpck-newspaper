import { Link } from "react-router-dom";


const News = ({news}) => {
  const {
    _id,
    title,
    total_view,
    rating,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  return (
    <div className="card bg-base-100 shadow-xl">
      <h2 className="card-title font-bold text-2xl">{title}</h2>
      <figure className=" pt-10">
        <img src={image_url} alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center ">
        {details.length > 200 ? (
          <p className="text-gray-800 font-extralight">
            {details.slice(0, 200)}
            <Link className="font-medium text-blue-700 " to={`/news/${_id}`}> Read More.....</Link>
          </p>
        ) : (
          <p className="text-gray-800 font-extralight">{details}</p>
        )}
      </div>
    </div>
  );
};

export default News;